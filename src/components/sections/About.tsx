import { User, Cloud, Code2, Award } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PERSON } from '../../data';

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Designing and deploying scalable cloud architectures on Azure and GCP with a focus on reliability and cost efficiency.',
  },
  {
    icon: Code2,
    title: 'Infrastructure as Code',
    description: 'Automating infrastructure provisioning with Terraform, eliminating manual toil and ensuring reproducible environments.',
  },
  {
    icon: Award,
    title: 'Certified Expert',
    description: '6 industry certifications spanning Azure, Google Cloud, and Terraform — validating deep platform knowledge.',
  },
];

export default function About() {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  const highlightsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="about" className="relative">
      <SectionHeader
        label="about"
        title="Who I am"
        description="A quick look at who I am and what drives my work in cloud engineering."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio card */}
        <div ref={cardRef} className="animate-on-scroll">
          <div className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f2937] bg-[#0d1117]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-slate-500">about.ts</span>
            </div>
            <div className="p-6">
              <div className="font-mono text-sm leading-relaxed space-y-3">
                <div>
                  <span className="text-slate-500">const </span>
                  <span className="text-cyan-400">engineer</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="pl-6 space-y-2">
                  <div>
                    <span className="text-violet-400">name</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"{PERSON.name}"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-violet-400">role</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"{PERSON.role}"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-violet-400">location</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"{PERSON.location}"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-violet-400">focus</span>
                    <span className="text-slate-400">: [</span>
                    <div className="pl-4 space-y-1">
                      {['"Cloud Infrastructure"', '"Containerization"', '"IaC"', '"Frontend Dev"'].map((f) => (
                        <div key={f}>
                          <span className="text-emerald-400">{f}</span>
                          <span className="text-slate-400">,</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-400">],</span>
                  </div>
                </div>
                <div className="text-slate-400">{'}'}</div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1f2937]">
                <div className="flex items-start gap-3">
                  <User size={16} className="text-cyan-400 mt-1 shrink-0" />
                  <p className="text-slate-400 text-sm leading-relaxed">{PERSON.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div ref={highlightsRef} className="animate-on-scroll stagger-children flex flex-col gap-5">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-xl bg-[#111827] border border-[#1f2937] hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                <Icon size={18} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="font-display text-white font-semibold mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
