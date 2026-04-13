import { Terminal, Heart } from "lucide-react";
import { PERSON, NAV_ITEMS } from "../../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1f2937] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-cyan-400/40 flex items-center justify-center">
              <Terminal size={14} className="text-cyan-400" />
            </div>
            <span className="font-mono text-sm text-slate-400">
              {PERSON.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
              <span className="text-cyan-400">.</span>portfolio
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  const id = item.href.replace("#", "");
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 py-1.5 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-mono text-xs text-slate-600 flex items-center gap-1.5">
            © {year} {PERSON.name}
            <span className="text-slate-700">·</span>
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
