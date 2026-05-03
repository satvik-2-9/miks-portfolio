import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Linkedin, Send, Check, Download } from "lucide-react";
import { profile, socials } from "../../mock/mock";
import { useToast } from "../../hooks/use-toast";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "A few fields are missing", description: "Name, email and a message are required." });
      return;
    }
    setSubmitting(true);
    try {
      const res = await axios.post(`${API}/contact`, form, { timeout: 12000 });
      if (res.data?.ok) {
        setSent(true);
        toast({ title: "Message sent", description: "Mihika will get back to you shortly." });
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4500);
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      const body = encodeURIComponent(`Hi Mihika,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
      const subject = encodeURIComponent(form.subject || "Portfolio enquiry");
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      toast({ title: "Couldn\u2019t reach the server", description: "Opening your mail client as a fallback." });
    } finally {
      setSubmitting(false);
    }
  };

  const downloadCV = () => {
    fetch(`${API}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "download_cv", section: "contact" }),
    }).catch(() => {});
    window.location.href = `${API}/resume`;
  };

  return (
    <section id="contact" className="border-b border-ink/15 bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood-light">§ 07</span>
          <span className="h-px flex-1 bg-paper/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-paper/60 uppercase">Desk / Correspondence</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[44px] md:text-[64px] leading-[1.0] tracking-[-0.02em]">
              Let’s put something <span className="italic text-oxblood-light">on the record.</span>
            </h2>
            <p className="mt-6 font-serifText text-[17px] leading-[1.75] text-paper/75 max-w-[480px]">
              Story tips, communications briefs, brand narratives, or a quick coffee in Bengaluru — the inbox is always open.
            </p>

            <div className="mt-10 space-y-5 font-mono text-[12px] tracking-[0.2em] uppercase">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group">
                <span className="w-9 h-9 grid place-items-center border border-paper/30 group-hover:border-oxblood-light group-hover:text-oxblood-light transition-colors">
                  <Mail size={14} />
                </span>
                <span className="text-paper/85 group-hover:text-paper normal-case tracking-normal font-mono text-[13px]">
                  {profile.email}
                </span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                <span className="w-9 h-9 grid place-items-center border border-paper/30 group-hover:border-oxblood-light group-hover:text-oxblood-light transition-colors">
                  <Phone size={14} />
                </span>
                <span className="text-paper/85 group-hover:text-paper tracking-normal font-mono text-[13px]">
                  {profile.phone}
                </span>
              </a>
              <a href={profile.linkedin} target="_top" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-9 h-9 grid place-items-center border border-paper/30 group-hover:border-oxblood-light group-hover:text-oxblood-light transition-colors">
                  <Linkedin size={14} />
                </span>
                <span className="text-paper/85 group-hover:text-paper normal-case tracking-normal font-mono text-[13px]">
                  linkedin.com/in/mihika-sharma-05680322a
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-9 h-9 grid place-items-center border border-paper/30">
                  <MapPin size={14} />
                </span>
                <span className="text-paper/85 tracking-normal font-mono text-[13px]">{profile.location}</span>
              </div>
            </div>

            {/* Download CV */}
            <button
              onClick={downloadCV}
              className="mt-10 inline-flex items-center gap-2 bg-oxblood text-paper px-5 py-3 font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              <Download size={14} /> Download CV (PDF)
            </button>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="border border-paper/15 bg-paper/[0.03] p-6 md:p-10 backdrop-blur"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-paper/55 mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-paper/25 focus:border-oxblood-light outline-none py-2 font-serifText text-[16px] text-paper placeholder:text-paper/30 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-paper/55 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-paper/25 focus:border-oxblood-light outline-none py-2 font-serifText text-[16px] text-paper placeholder:text-paper/30 transition-colors"
                    placeholder="you@publication.com"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-paper/55 mb-2">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  className="w-full bg-transparent border-b border-paper/25 focus:border-oxblood-light outline-none py-2 font-serifText text-[16px] text-paper placeholder:text-paper/30 transition-colors"
                  placeholder="Story tip / commission / brief"
                />
              </div>
              <div className="mt-6">
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-paper/55 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="w-full bg-transparent border-b border-paper/25 focus:border-oxblood-light outline-none py-2 font-serifText text-[16px] text-paper placeholder:text-paper/30 resize-none transition-colors"
                  placeholder="Tell me what you’re working on…"
                />
              </div>
              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/45 max-w-[360px]">
                  Opens your mail client · a copy is kept locally for your records
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3 font-mono text-[12px] tracking-[0.25em] uppercase hover:bg-oxblood-light hover:text-ink transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sent ? (
                    <>
                      Sent <Check size={16} />
                    </>
                  ) : submitting ? (
                    <>Sending&hellip;</>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
