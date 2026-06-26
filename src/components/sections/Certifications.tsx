import { ShieldCheck } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CERTIFICATIONS } from '../../data';

const issuerStyles: Record<string, { border: string; glow: string; accent: string }> = {
  Microsoft: {
    border: 'hover:border-blue-400/40',
    glow: 'hover:shadow-blue-400/5',
    accent: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  'Google Cloud': {
    border: 'hover:border-emerald-400/40',
    glow: 'hover:shadow-emerald-400/5',
    accent: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  HashiCorp: {
    border: 'hover:border-violet-400/40',
    glow: 'hover:shadow-violet-400/5',
    accent: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  },
};

export default function Certifications() {
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="certifications">
      <SectionHeader
        label="certifications"
        title="Credentials"
        description="Industry-recognized certifications that validate my expertise across cloud platforms and tools."
      />

      <div ref={gridRef} className="animate-on-scroll stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert) => {
          const styles = issuerStyles[cert.issuer] ?? issuerStyles.Microsoft;
          return (
            <div
              key={cert.shortName}
              className={`group relative bg-[#111827] rounded-xl border border-[#1f2937] p-6 transition-all duration-300 hover:shadow-xl ${styles.border} ${styles.glow}`}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${cert.color}06 0%, transparent 60%)`,
                }}
              />

              <div className="relative">
                {/* Icon + issuer */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border text-xl ${styles.accent}`}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${styles.accent}`}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Short name */}
                <div className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-1">
                  {cert.shortName}
                </div>

                {/* Full name */}
                <h3 className="font-display text-base font-semibold text-white leading-snug">
                  {cert.name}
                </h3>

                {/* Bottom badge */}
                <div className="mt-4 pt-4 border-t border-[#1f2937] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-slate-500">Active credential</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total count */}
      <div className="mt-10 text-center">
        <p className="font-mono text-sm text-slate-500">
          <span className="text-cyan-400 font-semibold">{CERTIFICATIONS.length}</span> active certifications
          across <span className="text-cyan-400 font-semibold">3</span> platforms
        </p>
      </div>
    </Section>
  );
}
