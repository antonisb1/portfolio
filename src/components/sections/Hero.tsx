import { useEffect, useState } from "react";
import { Mail, ChevronRight, MapPin } from "lucide-react";
import { PERSON } from "../../data";
import Button from "../ui/Button";

const TYPING_STRINGS = [
  "Cloud Engineer",
  "Azure Specialist",
  "GCP Architect",
  // "IaC Developer",
  // "Kubernetes Engineer",
];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPING_STRINGS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  // const scrollToProjects = () => {
  //   document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden grid-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-400/3 rounded-full blur-3xl" />
      </div>

      {/* Terminal-style top label */}
      <div className="max-w-6xl mx-auto w-full pt-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-wider">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            {PERSON.name}
          </h1>
        </div>

        <div className="font-display text-3xl md:text-5xl font-semibold mb-8 h-14 flex items-center">
          <TypingEffect />
        </div>

        <div>
          {/* <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-3">
            {PERSON.tagline}
          </p> */}
          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm mb-10">
            <MapPin size={14} className="text-cyan-400" />
            {PERSON.location}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Button variant="primary" onClick={scrollToContact}>
            <Mail size={16} />
            Get in Touch
          </Button>
          <Button variant="secondary" onClick={scrollToExperience}>
            View Experience
            <ChevronRight size={16} />
          </Button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 border-t border-[#1f2937] pt-10">
          {[
            { value: "2+", label: "Years Experience" },
            { value: "6", label: "Certifications" },
            { value: "3", label: "Cloud Platforms" },
            // { value: "∞", label: "Infrastructure Plans" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-slate-500 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
