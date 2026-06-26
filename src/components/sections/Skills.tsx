import Section, { SectionHeader } from '../ui/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SKILL_CATEGORIES } from '../../data';

const colorMap: Record<string, { card: string; badge: string; dot: string; label: string }> = {
  cyan: {
    card: 'hover:border-cyan-400/40',
    badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20',
    dot: 'bg-cyan-400',
    label: 'text-cyan-400',
  },
  emerald: {
    card: 'hover:border-emerald-400/40',
    badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20 hover:bg-emerald-400/20',
    dot: 'bg-emerald-400',
    label: 'text-emerald-400',
  },
  violet: {
    card: 'hover:border-violet-400/40',
    badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20 hover:bg-violet-400/20',
    dot: 'bg-violet-400',
    label: 'text-violet-400',
  },
  amber: {
    card: 'hover:border-amber-400/40',
    badge: 'bg-amber-400/10 text-amber-300 border-amber-400/20 hover:bg-amber-400/20',
    dot: 'bg-amber-400',
    label: 'text-amber-400',
  },
  rose: {
    card: 'hover:border-rose-400/40',
    badge: 'bg-rose-400/10 text-rose-300 border-rose-400/20 hover:bg-rose-400/20',
    dot: 'bg-rose-400',
    label: 'text-rose-400',
  },
};

export default function Skills() {
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="skills" className="bg-[#0d1117]/60">
      <SectionHeader
        label="skills"
        title="Tech Stack"
        description="The tools and technologies I work with to build, deploy, and scale cloud-native systems."
      />

      <div ref={gridRef} className="animate-on-scroll stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map((cat) => {
          const colors = colorMap[cat.color] ?? colorMap.cyan;
          return (
            <div
              key={cat.label}
              className={`bg-[#111827] rounded-xl border border-[#1f2937] p-6 transition-all duration-300 group ${colors.card}`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                <span className={`font-mono text-xs tracking-widest uppercase ${colors.label}`}>
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-default select-none ${colors.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
