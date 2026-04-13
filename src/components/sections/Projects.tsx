import { ExternalLink, GitBranch, Zap, Lightbulb } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PROJECTS } from '../../data';
import type { Project } from '../../types';

const statusConfig = {
  live: {
    label: 'Live',
    icon: Zap,
    classes: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    dot: 'bg-emerald-400',
  },
  wip: {
    label: 'In Progress',
    icon: GitBranch,
    classes: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    dot: 'bg-amber-400',
  },
  concept: {
    label: 'Concept',
    icon: Lightbulb,
    classes: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    dot: 'bg-violet-400',
  },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <div className="group bg-[#111827] rounded-xl border border-[#1f2937] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-1">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${status.classes}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
            {status.label}
          </span>
          <StatusIcon size={14} className="text-slate-600" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-[#1f2937] text-slate-400 text-xs font-mono hover:text-slate-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
          >
            View Project <ExternalLink size={12} />
          </a>
        ) : (
          <span className="text-xs font-mono text-slate-600 mt-auto">// private / internal</span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="projects" className="bg-[#0d1117]/60">
      <SectionHeader
        label="projects"
        title="Featured Work"
        description="A selection of cloud engineering and development projects I've built or contributed to."
      />

      <div ref={gridRef} className="animate-on-scroll stagger-children grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
