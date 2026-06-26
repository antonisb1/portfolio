import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Section, { SectionHeader } from "../ui/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { EXPERIENCES, EDUCATION } from "../../data";

export default function Experience() {
  const expRef = useScrollAnimation<HTMLDivElement>();
  const eduRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="experience">
      <SectionHeader
        label="experience"
        title="Work History"
        description="My professional journey building cloud infrastructure and modern applications."
      />

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Experience Timeline */}
        <div ref={expRef} className="animate-on-scroll lg:col-span-2 space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 to-transparent" />

              <div className="bg-[#111827] rounded-xl border border-[#1f2937] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    {/* Icon dot */}
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                      <Briefcase size={16} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-cyan-400 font-medium text-sm">
                          {exp.company}
                        </span>
                        <span className="text-slate-600 text-xs">•</span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                          <Calendar size={11} />
                          {exp.dates}
                        </span>
                        <span className="text-slate-600 text-xs">•</span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="px-6 pb-5 border-t border-[#1f2937] pt-4">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, ri) => (
                      <li
                        key={ri}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-400 mt-0.5 shrink-0"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#1f2937]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#1f2937] text-slate-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education sidebar */}
        <div ref={eduRef} className="animate-on-scroll">
          <h3 className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-5">
            // Education
          </h3>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                  <span className="text-emerald-400 text-xs font-bold">
                    BSc
                  </span>
                </div>
                <h4 className="font-display text-white font-semibold mb-1">
                  {edu.degree}
                </h4>
                <p className="text-emerald-400 text-sm font-medium">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1 text-slate-500 text-xs font-mono mt-2">
                  <Calendar size={11} />
                  {edu.dates}
                </div>
              </div>
            ))}
          </div>

          {/* Quick facts */}
          <div className="mt-8 p-5 rounded-xl bg-[#111827] border border-[#1f2937]">
            <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">
              // Quick facts
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Languages",
                  value: "Greek (native), English (fluent)",
                },
                { label: "Cloud certs", value: "6 active certifications" },
                { label: "Based in", value: "Athens, Greece" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-xs text-slate-600 mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
