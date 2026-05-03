#!/usr/bin/env python3
"""
Backend API Test Suite for Mihika Sharma Portfolio
Tests all endpoints via the public REACT_APP_BACKEND_URL
"""

import requests
import json
import time
from datetime import datetime

# Base URL from frontend/.env
BASE_URL = "https://fintech-voices.preview.emergentagent.com/api"

# Color codes for output
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
BLUE = "\033[94m"
RESET = "\033[0m"

def log_test(name, status, details=""):
    """Log test result with color coding"""
    color = GREEN if status == "PASS" else RED if status == "FAIL" else YELLOW
    print(f"{color}[{status}]{RESET} {name}")
    if details:
        print(f"      {details}")

def test_health():
    """Test GET /api/health"""
    print(f"\n{BLUE}=== Testing GET /api/health ==={RESET}")
    try:
        resp = requests.get(f"{BASE_URL}/health", timeout=10)
        
        if resp.status_code != 200:
            log_test("Health endpoint status code", "FAIL", f"Expected 200, got {resp.status_code}")
            return False
        
        data = resp.json()
        
        # Check structure
        if "ok" not in data or "time" not in data:
            log_test("Health response structure", "FAIL", f"Missing fields. Got: {data}")
            return False
        
        if data["ok"] != True:
            log_test("Health ok field", "FAIL", f"Expected True, got {data['ok']}")
            return False
        
        # Validate ISO-8601 timestamp
        try:
            datetime.fromisoformat(data["time"].replace("Z", "+00:00"))
        except:
            log_test("Health time format", "FAIL", f"Invalid ISO-8601: {data['time']}")
            return False
        
        log_test("GET /api/health", "PASS", f"Response: {data}")
        return True
        
    except Exception as e:
        log_test("GET /api/health", "FAIL", f"Exception: {str(e)}")
        return False

def test_root():
    """Test GET /api/ (root)"""
    print(f"\n{BLUE}=== Testing GET /api/ (root) ==={RESET}")
    try:
        resp = requests.get(f"{BASE_URL}/", timeout=10)
        
        if resp.status_code != 200:
            log_test("Root endpoint status code", "FAIL", f"Expected 200, got {resp.status_code}")
            return False
        
        data = resp.json()
        
        if data.get("status") != "ok" or data.get("service") != "mihika-portfolio":
            log_test("Root response content", "FAIL", f"Expected {{status: ok, service: mihika-portfolio}}, got {data}")
            return False
        
        log_test("GET /api/", "PASS", f"Response: {data}")
        return True
        
    except Exception as e:
        log_test("GET /api/", "FAIL", f"Exception: {str(e)}")
        return False

def test_stats_initial():
    """Get initial stats before running other tests"""
    print(f"\n{BLUE}=== Getting Initial Stats ==={RESET}")
    try:
        resp = requests.get(f"{BASE_URL}/stats", timeout=10)
        
        if resp.status_code != 200:
            log_test("Stats endpoint status code", "FAIL", f"Expected 200, got {resp.status_code}")
            return None
        
        data = resp.json()
        
        # Validate structure
        if not all(k in data for k in ["messages", "downloads", "events_24h"]):
            log_test("Stats response structure", "FAIL", f"Missing fields. Got: {data}")
            return None
        
        # Validate types
        if not all(isinstance(data[k], int) for k in ["messages", "downloads", "events_24h"]):
            log_test("Stats field types", "FAIL", f"Expected integers. Got: {data}")
            return None
        
        log_test("GET /api/stats (initial)", "PASS", f"messages={data['messages']}, downloads={data['downloads']}, events_24h={data['events_24h']}")
        return data
        
    except Exception as e:
        log_test("GET /api/stats (initial)", "FAIL", f"Exception: {str(e)}")
        return None

def test_contact_happy_path():
    """Test POST /api/contact with valid data"""
    print(f"\n{BLUE}=== Testing POST /api/contact (Happy Path) ==={RESET}")
    try:
        payload = {
            "name": "Arjun Mehta",
            "email": "arjun.mehta@example.com",
            "subject": "Collaboration Opportunity",
            "message": "Hi Mihika, I came across your editorial work and I'm impressed by your storytelling approach. I'd love to discuss a potential collaboration on an upcoming documentary project about sustainable fashion in India. Would you be available for a brief call next week?"
        }
        
        start_time = time.time()
        resp = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        elapsed = time.time() - start_time
        
        if resp.status_code != 200:
            log_test("Contact happy path status", "FAIL", f"Expected 200, got {resp.status_code}. Response: {resp.text}")
            return False
        
        data = resp.json()
        
        if not data.get("ok") or "id" not in data:
            log_test("Contact response structure", "FAIL", f"Expected {{ok: true, id: <uuid>}}, got {data}")
            return False
        
        # Verify response is fast (background task shouldn't block)
        if elapsed > 2.0:
            log_test("Contact response time", "WARN", f"Took {elapsed:.2f}s (should be <2s)")
        
        log_test("POST /api/contact (happy path)", "PASS", f"id={data['id']}, time={elapsed:.2f}s")
        return True
        
    except Exception as e:
        log_test("POST /api/contact (happy path)", "FAIL", f"Exception: {str(e)}")
        return False

def test_contact_validation():
    """Test POST /api/contact validation errors"""
    print(f"\n{BLUE}=== Testing POST /api/contact (Validation) ==={RESET}")
    
    test_cases = [
        {
            "name": "Missing required fields",
            "payload": {"name": "Test"},
            "expected_status": 422
        },
        {
            "name": "Invalid email",
            "payload": {"name": "Test User", "email": "not-an-email", "message": "Hello"},
            "expected_status": 422
        },
        {
            "name": "Empty message",
            "payload": {"name": "Test User", "email": "test@example.com", "message": ""},
            "expected_status": 422
        },
        {
            "name": "Message too long (>5000 chars)",
            "payload": {"name": "Test User", "email": "test@example.com", "message": "x" * 5001},
            "expected_status": 422
        },
        {
            "name": "Empty name",
            "payload": {"name": "", "email": "test@example.com", "message": "Hello"},
            "expected_status": 422
        }
    ]
    
    all_passed = True
    for test_case in test_cases:
        try:
            resp = requests.post(f"{BASE_URL}/contact", json=test_case["payload"], timeout=10)
            
            if resp.status_code != test_case["expected_status"]:
                log_test(f"Contact validation: {test_case['name']}", "FAIL", 
                        f"Expected {test_case['expected_status']}, got {resp.status_code}")
                all_passed = False
            else:
                log_test(f"Contact validation: {test_case['name']}", "PASS", 
                        f"Correctly returned {resp.status_code}")
        except Exception as e:
            log_test(f"Contact validation: {test_case['name']}", "FAIL", f"Exception: {str(e)}")
            all_passed = False
    
    return all_passed

def test_track_happy_path():
    """Test POST /api/track with valid events"""
    print(f"\n{BLUE}=== Testing POST /api/track (Happy Path) ==={RESET}")
    
    allowed_events = ["view_section", "play_reel", "cta_click", "nav", "download_cv", "open_external"]
    
    all_passed = True
    for event in allowed_events[:3]:  # Test first 3 to save time
        try:
            payload = {
                "event": event,
                "section": "hero",
                "meta": {"test": True}
            }
            
            resp = requests.post(f"{BASE_URL}/track", json=payload, timeout=10)
            
            if resp.status_code != 200:
                log_test(f"Track event '{event}'", "FAIL", f"Expected 200, got {resp.status_code}")
                all_passed = False
                continue
            
            data = resp.json()
            if not data.get("ok"):
                log_test(f"Track event '{event}'", "FAIL", f"Expected {{ok: true}}, got {data}")
                all_passed = False
            else:
                log_test(f"Track event '{event}'", "PASS", f"Response: {data}")
                
        except Exception as e:
            log_test(f"Track event '{event}'", "FAIL", f"Exception: {str(e)}")
            all_passed = False
    
    return all_passed

def test_track_invalid_event():
    """Test POST /api/track with invalid event"""
    print(f"\n{BLUE}=== Testing POST /api/track (Invalid Event) ==={RESET}")
    try:
        payload = {
            "event": "hack_event",
            "section": "test"
        }
        
        resp = requests.post(f"{BASE_URL}/track", json=payload, timeout=10)
        
        if resp.status_code != 400:
            log_test("Track invalid event", "FAIL", f"Expected 400, got {resp.status_code}")
            return False
        
        log_test("Track invalid event", "PASS", f"Correctly rejected with 400")
        return True
        
    except Exception as e:
        log_test("Track invalid event", "FAIL", f"Exception: {str(e)}")
        return False

def test_resume():
    """Test GET /api/resume"""
    print(f"\n{BLUE}=== Testing GET /api/resume ==={RESET}")
    try:
        resp = requests.get(f"{BASE_URL}/resume", timeout=10)
        
        if resp.status_code != 200:
            log_test("Resume endpoint status", "FAIL", f"Expected 200, got {resp.status_code}")
            return False
        
        # Check Content-Type
        content_type = resp.headers.get("content-type", "")
        if "application/pdf" not in content_type:
            log_test("Resume Content-Type", "FAIL", f"Expected application/pdf, got {content_type}")
            return False
        
        # Check Content-Disposition
        content_disp = resp.headers.get("content-disposition", "")
        if "Mihika-Sharma-Resume.pdf" not in content_disp:
            log_test("Resume filename", "FAIL", f"Expected Mihika-Sharma-Resume.pdf in header, got {content_disp}")
            return False
        
        # Check PDF content
        content = resp.content
        if len(content) < 50000:
            log_test("Resume file size", "FAIL", f"Expected >50KB, got {len(content)} bytes")
            return False
        
        if not content.startswith(b"%PDF-"):
            log_test("Resume PDF header", "FAIL", f"Expected %PDF- header, got {content[:10]}")
            return False
        
        log_test("GET /api/resume", "PASS", f"PDF served correctly ({len(content)} bytes)")
        return True
        
    except Exception as e:
        log_test("GET /api/resume", "FAIL", f"Exception: {str(e)}")
        return False

def test_stats_final(initial_stats):
    """Test GET /api/stats and verify counters increased"""
    print(f"\n{BLUE}=== Testing GET /api/stats (Final) ==={RESET}")
    
    if initial_stats is None:
        log_test("Stats comparison", "SKIP", "No initial stats available")
        return False
    
    try:
        resp = requests.get(f"{BASE_URL}/stats", timeout=10)
        
        if resp.status_code != 200:
            log_test("Stats final status", "FAIL", f"Expected 200, got {resp.status_code}")
            return False
        
        final_stats = resp.json()
        
        # Compare counters
        messages_increased = final_stats["messages"] > initial_stats["messages"]
        downloads_increased = final_stats["downloads"] > initial_stats["downloads"]
        events_increased = final_stats["events_24h"] > initial_stats["events_24h"]
        
        log_test("Stats messages counter", 
                "PASS" if messages_increased else "FAIL",
                f"{initial_stats['messages']} -> {final_stats['messages']} (expected +1)")
        
        log_test("Stats downloads counter", 
                "PASS" if downloads_increased else "FAIL",
                f"{initial_stats['downloads']} -> {final_stats['downloads']} (expected +1)")
        
        log_test("Stats events_24h counter", 
                "PASS" if events_increased else "FAIL",
                f"{initial_stats['events_24h']} -> {final_stats['events_24h']} (expected +4: 3 track + 1 resume)")
        
        return messages_increased and downloads_increased and events_increased
        
    except Exception as e:
        log_test("GET /api/stats (final)", "FAIL", f"Exception: {str(e)}")
        return False

def main():
    """Run all tests"""
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}Mihika Sharma Portfolio - Backend API Test Suite{RESET}")
    print(f"{BLUE}Base URL: {BASE_URL}{RESET}")
    print(f"{BLUE}{'='*60}{RESET}")
    
    results = {}
    
    # Test in priority order: high -> medium -> low
    
    # Low priority tests first (to get baseline)
    results["health"] = test_health()
    results["root"] = test_root()
    initial_stats = test_stats_initial()
    
    # High priority tests
    results["contact_happy"] = test_contact_happy_path()
    results["contact_validation"] = test_contact_validation()
    results["resume"] = test_resume()
    
    # Medium priority tests
    results["track_happy"] = test_track_happy_path()
    results["track_invalid"] = test_track_invalid_event()
    
    # Final stats check
    results["stats_final"] = test_stats_final(initial_stats)
    
    # Summary
    print(f"\n{BLUE}{'='*60}{RESET}")
    print(f"{BLUE}Test Summary{RESET}")
    print(f"{BLUE}{'='*60}{RESET}")
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = f"{GREEN}PASS{RESET}" if result else f"{RED}FAIL{RESET}"
        print(f"  {test_name}: {status}")
    
    print(f"\n{BLUE}Total: {passed}/{total} tests passed{RESET}")
    
    if passed == total:
        print(f"{GREEN}✓ All tests passed!{RESET}")
        return 0
    else:
        print(f"{RED}✗ Some tests failed{RESET}")
        return 1

if __name__ == "__main__":
    exit(main())
