import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const GEMINI_ENDPOINT = "https://gemini-proxy.antonis-benardis.workers.dev";
const MAX_MESSAGES = 20;
const MAX_TOKENS = 400;

const SYSTEM_PROMPT = `You are a helpful assistant on Antonis Benardis's portfolio website.
Answer questions about Antonis concisely and professionally. Always respond in the same language the user writes in.

ABOUT ANTONIS:
- Name: Antonis Benardis
- Role: Cloud Engineer
- Location: Athens, Greece
- Email: antonis.benardis@gmail.com
- Phone: +30 6984188284
- Summary: Cloud Engineer with hands-on experience in Azure and Google Cloud, focused on cloud infrastructure, containerization, and Infrastructure as Code. Also experienced in front-end development.

EXPERIENCE:
- Cloud Engineer at Deloitte Greece (Sep 2023 – Aug 2025)
  • Migrated Excel datasets to Google BigQuery
  • Built dashboards with Looker Studio
  • Integrated REST APIs into React applications
  • Developed responsive React applications
  Tags: Azure, Google Cloud, BigQuery, React, CI/CD, Looker Studio

EDUCATION:
- Applied Informatics, University of Macedonia (2020–2024)

CERTIFICATIONS:
- AZ-104: Azure Administrator (Microsoft)
- GCP CDL: Cloud Digital Leader (Google Cloud)
- GCP ACE: Associate Cloud Engineer (Google Cloud)
- GCP PCA: Professional Cloud Architect (Google Cloud)
- TF-003: Terraform Associate (HashiCorp)
- AI-102: Azure AI Engineer (Microsoft)

SKILLS:
- Cloud & DevOps: Azure, Google Cloud, Kubernetes, Docker, Terraform, CI/CD (Azure DevOps)
- Programming: JavaScript, TypeScript
- Frontend: React, Tailwind CSS
- Testing & Tools: Jest, Vitest, Puppeteer, Postman, GitHub
- AI/ML: Azure AI, Machine Learning Fundamentals

AVAILABILITY: Open to full-time roles, contract work, and interesting cloud projects.

If someone asks about something unrelated to Antonis or his work, politely redirect the conversation.`;

const SUGGESTIONS = [
  "What's your experience?",
  "Which certifications do you have?",
  "What are your main skills?",
  "Are you open to work?",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

async function callGemini(messages: Message[]): Promise<string> {
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const res = await fetch(GEMINI_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: {
        maxOutputTokens: MAX_TOKENS,
        temperature: 0.7,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: { message?: string } }).error?.message ||
        `HTTP ${res.status}`,
    );
  }

  const data = (await res.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: string }> };
    }>;
  };
  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response received."
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [msgCount, setMsgCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    if (msgCount >= MAX_MESSAGES) {
      setError("Session limit reached. Refresh the page to reset.");
      return;
    }

    setError(null);
    const userMsg: Message = { role: "user", content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);
    setMsgCount((c) => c + 1);

    try {
      const reply = await callGemini(updated);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError(
        `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
      );
    } finally {
      setLoading(false);
    }
  };

  const showSuggestions = messages.length === 0 && !loading;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with AI assistant"}
        className={`fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 bg-cyan-400 text-[#080c10] hover:bg-cyan-300 hover:shadow-cyan-400/30 hover:shadow-xl ${open ? "rotate-90 scale-90" : ""}`}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-xl border border-[#1f2937] bg-[#0d1117] shadow-2xl shadow-black/60 transition-all duration-300 w-[340px] sm:w-[380px] ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ height: "480px" }}
      >
        <div className="flex items-center gap-3 border-b border-[#1f2937] bg-[#080c10] px-4 py-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/20">
            <Bot size={15} className="text-cyan-400" />
          </div>
          <div>
            <p className="font-mono text-sm font-medium text-slate-200">
              antonis.ai
            </p>
            <p className="font-mono text-xs text-slate-500">
              // powered by Gemini 2.5 Flash
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400">online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          <div className="flex items-start gap-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded bg-cyan-400/10 border border-cyan-400/20 mt-0.5">
              <Bot size={12} className="text-cyan-400" />
            </div>
            <div className="rounded-lg rounded-tl-sm bg-[#111827] border border-[#1f2937] px-3 py-2 text-sm font-mono text-slate-300 leading-relaxed">
              Hey! Ask me anything about Antonis — his experience, skills,
              certifications, or availability.
            </div>
          </div>

          {showSuggestions && (
            <div className="flex flex-wrap gap-1.5 pl-8">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-md border border-[#1f2937] bg-[#111827] px-2.5 py-1 font-mono text-xs text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {m.role === "assistant" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded bg-cyan-400/10 border border-cyan-400/20 mb-0.5">
                  <Bot size={12} className="text-cyan-400" />
                </div>
              )}
              <div
                className={`max-w-[82%] rounded-lg px-3 py-2 font-mono text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-sm bg-cyan-400 text-[#080c10]"
                    : "rounded-bl-sm bg-[#111827] border border-[#1f2937] text-slate-300"
                }`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-2">
              <div className="flex size-6 shrink-0 items-center justify-center rounded bg-cyan-400/10 border border-cyan-400/20">
                <Bot size={12} className="text-cyan-400" />
              </div>
              <div className="flex gap-1 rounded-lg rounded-bl-sm bg-[#111827] border border-[#1f2937] px-3 py-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full bg-slate-500 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2 font-mono text-xs text-red-400">
              {error}
            </div>
          )}

          {msgCount >= MAX_MESSAGES - 3 && msgCount < MAX_MESSAGES && (
            <p className="text-center font-mono text-xs text-slate-600">
              // {MAX_MESSAGES - msgCount} messages remaining
            </p>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-2 border-t border-[#1f2937] bg-[#080c10] px-3 py-2.5">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && !e.shiftKey && sendMessage(input)
            }
            placeholder="// ask me anything..."
            disabled={loading || msgCount >= MAX_MESSAGES}
            className="flex-1 bg-transparent font-mono text-sm text-slate-300 outline-none placeholder-slate-600 disabled:opacity-40"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading || msgCount >= MAX_MESSAGES}
            aria-label="Send"
            className={`flex size-8 items-center justify-center rounded-lg transition-all ${
              input.trim() && !loading
                ? "bg-cyan-400 text-[#080c10] hover:bg-cyan-300"
                : "bg-[#1f2937] text-slate-600"
            }`}
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
