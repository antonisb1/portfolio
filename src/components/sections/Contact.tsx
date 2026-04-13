import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Section, { SectionHeader } from "../ui/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PERSON } from "../../data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SendStatus = "idle" | "sending" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SendStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user starts typing again
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject || "(no subject)",
          message: form.message,
          reply_to: form.email,
        },
        PUBLIC_KEY,
      );

      setStatus("success");
      setForm(initialForm);

      // Reset to idle after 5 s so the user can send again
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Something went wrong. Please try again or email me directly.",
      );
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-[#0d1117] border border-[#1f2937] rounded-lg px-4 py-3 text-slate-200 text-sm font-mono placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200";

  const isBusy = status === "sending";

  return (
    <Section id="contact" className="bg-[#0d1117]/60">
      <SectionHeader
        label="contact"
        title="Get in Touch"
        description="Have a project in mind or want to discuss cloud architecture? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left: contact info */}
        <div
          ref={leftRef}
          className="animate-on-scroll lg:col-span-2 space-y-6"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: PERSON.email,
              href: `mailto:${PERSON.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: PERSON.phone,
              href: `tel:${PERSON.phone}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: PERSON.location,
              href: undefined,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="font-mono text-xs text-slate-500 mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-200 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-200 text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="pt-4 border-t border-[#1f2937]">
            <p className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
              // Find me on
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1f2937] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                  title={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Availability note */}
          <div className="p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-emerald-400">
                Available for opportunities
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Open to full-time roles, contract work, and interesting cloud
              projects.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div ref={rightRef} className="animate-on-scroll lg:col-span-3">
          <div className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f2937] bg-[#0d1117]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                send-message.ts
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">
                    // name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={isBusy}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">
                    // email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    disabled={isBusy}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 mb-2">
                  // subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Cloud Architecture Discussion"
                  disabled={isBusy}
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 mb-2">
                  // message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={isBusy}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                  <AlertCircle
                    size={15}
                    className="text-red-400 mt-0.5 shrink-0"
                  />
                  <p className="font-mono text-xs text-red-400">{errorMsg}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={
                  isBusy ||
                  status === "success" ||
                  !form.name ||
                  !form.email ||
                  !form.message
                }
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-mono text-sm font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
                  status === "success"
                    ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/30"
                    : status === "error"
                      ? "bg-red-400/10 text-red-400 border border-red-400/20 hover:bg-red-400/20"
                      : "bg-cyan-400 text-[#080c10] hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25 active:scale-[0.98]"
                }`}
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                )}
                {status === "success" && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Message sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <Send size={15} />
                    Try again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center font-mono text-xs text-slate-600">
                // powered by EmailJS — your message lands directly in my inbox
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
