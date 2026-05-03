from fastapi import FastAPI, APIRouter, Request, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional, Dict, Any, List
import os
import uuid
import logging
import hashlib
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# --- Config ---
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
RESEND_FROM_EMAIL = os.environ.get("RESEND_FROM_EMAIL", "onboarding@resend.dev")
NOTIFY_TO_EMAIL = os.environ.get("NOTIFY_TO_EMAIL", "")

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

ALLOWED_EVENTS = {
    "view_section",
    "play_reel",
    "cta_click",
    "nav",
    "download_cv",
    "open_external",
}

RESUME_PATH = ROOT_DIR / "static" / "mihika-resume.pdf"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger("portfolio")

app = FastAPI(title="Mihika Portfolio API")
api_router = APIRouter(prefix="/api")


# --- Helpers ---
def utcnow():
    return datetime.now(timezone.utc)


def hash_ip(ip: str) -> str:
    if not ip:
        return ""
    return hashlib.sha256(ip.encode("utf-8")).hexdigest()[:16]


def client_ip(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for")
    if fwd:
        return fwd.split(",")[0].strip()
    return request.client.host if request.client else ""


# --- Models ---
class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class TrackEvent(BaseModel):
    event: str = Field(min_length=1, max_length=40)
    section: Optional[str] = Field(default=None, max_length=80)
    meta: Optional[Dict[str, Any]] = None


# --- Email helper ---
def send_contact_email(payload: dict) -> bool:
    if not RESEND_API_KEY or not NOTIFY_TO_EMAIL:
        logger.warning("Resend not configured; skipping email")
        return False
    try:
        name = payload.get("name", "")
        email = payload.get("email", "")
        subject = payload.get("subject") or "New portfolio message"
        message = payload.get("message", "")
        html = f"""
        <div style=\"font-family:Georgia,serif;max-width:560px;margin:0 auto;color:#141414;\">
          <div style=\"font-family:Menlo,monospace;font-size:11px;letter-spacing:0.25em;color:#7c1e22;text-transform:uppercase;margin-bottom:12px;\">New Message &middot; The Dispatch</div>
          <h2 style=\"font-family:Georgia,serif;font-weight:600;font-size:22px;margin:0 0 16px;\">{subject}</h2>
          <p style=\"line-height:1.6;font-size:15px;white-space:pre-wrap;\">{message}</p>
          <hr style=\"border:0;border-top:1px solid #ddd;margin:24px 0;\" />
          <div style=\"font-family:Menlo,monospace;font-size:12px;color:#555;\">
            <div><strong>From:</strong> {name}</div>
            <div><strong>Reply-to:</strong> <a href=\"mailto:{email}\" style=\"color:#7c1e22;\">{email}</a></div>
            <div><strong>At:</strong> {utcnow().isoformat()}</div>
          </div>
        </div>
        """
        resp = resend.Emails.send(
            {
                "from": f"Portfolio <{RESEND_FROM_EMAIL}>",
                "to": [NOTIFY_TO_EMAIL],
                "reply_to": email,
                "subject": f"[Portfolio] {subject} \u2014 from {name}",
                "html": html,
            }
        )
        logger.info(f"Resend OK: {resp}")
        return True
    except Exception as e:
        logger.exception(f"Resend send failed: {e}")
        return False


async def _email_and_flag(message_id: str, payload: dict):
    ok = send_contact_email(payload)
    try:
        await db.messages.update_one(
            {"id": message_id}, {"$set": {"email_sent": ok}}
        )
    except Exception as e:
        logger.exception(f"Mongo update flag failed: {e}")


# --- Routes ---
@api_router.get("/")
async def root():
    return {"status": "ok", "service": "mihika-portfolio"}


@api_router.get("/health")
async def health():
    return {"ok": True, "time": utcnow().isoformat()}


@api_router.post("/contact")
async def post_contact(
    payload: ContactCreate, request: Request, bg: BackgroundTasks
):
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "email": payload.email,
        "subject": (payload.subject or "").strip(),
        "message": payload.message.strip(),
        "at": utcnow(),
        "ip_hash": hash_ip(client_ip(request)),
        "ua": (request.headers.get("user-agent") or "")[:280],
        "email_sent": False,
    }
    try:
        await db.messages.insert_one(doc)
    except Exception as e:
        logger.exception(f"Mongo insert failed: {e}")
        raise HTTPException(status_code=500, detail="Could not save message")

    bg.add_task(_email_and_flag, doc["id"], doc)
    return {"ok": True, "id": doc["id"]}


@api_router.post("/track")
async def post_track(payload: TrackEvent, request: Request):
    if payload.event not in ALLOWED_EVENTS:
        raise HTTPException(status_code=400, detail="Invalid event")
    doc = {
        "id": str(uuid.uuid4()),
        "event": payload.event,
        "section": payload.section,
        "meta": payload.meta or {},
        "at": utcnow(),
        "ip_hash": hash_ip(client_ip(request)),
        "ref": (request.headers.get("referer") or "")[:240],
    }
    try:
        await db.events.insert_one(doc)
    except Exception as e:
        logger.exception(f"events insert failed: {e}")
        # Don't fail the user-facing request \u2014 analytics is best-effort
        return {"ok": False}
    return {"ok": True}


@api_router.get("/resume")
async def get_resume(request: Request):
    if not RESUME_PATH.exists():
        raise HTTPException(status_code=404, detail="Resume not found")
    # Increment counter (best-effort)
    try:
        await db.meta.update_one(
            {"_id": "resume_downloads"},
            {"$inc": {"count": 1}, "$set": {"last_at": utcnow()}},
            upsert=True,
        )
        await db.events.insert_one(
            {
                "id": str(uuid.uuid4()),
                "event": "download_cv",
                "section": "resume",
                "meta": {},
                "at": utcnow(),
                "ip_hash": hash_ip(client_ip(request)),
            }
        )
    except Exception as e:
        logger.warning(f"resume counter failed: {e}")
    return FileResponse(
        path=str(RESUME_PATH),
        media_type="application/pdf",
        filename="Mihika-Sharma-Resume.pdf",
    )


@api_router.get("/stats")
async def get_stats():
    try:
        messages = await db.messages.count_documents({})
        meta_doc = await db.meta.find_one({"_id": "resume_downloads"}) or {}
        downloads = int(meta_doc.get("count", 0))
        since = utcnow() - timedelta(hours=24)
        events_today = await db.events.count_documents({"at": {"$gte": since}})
        return {
            "messages": messages,
            "downloads": downloads,
            "events_24h": events_today,
        }
    except Exception as e:
        logger.exception(f"stats failed: {e}")
        raise HTTPException(status_code=500, detail="stats error")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
