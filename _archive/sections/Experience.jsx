import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { ease } from '../utils/motion';

const accents = {
  cyan: {
    icon: 'bg-cyan-500/10 text-cyan-400',
    dot: 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]',
    badge: 'border-cyan-800/50 bg-cyan-950/50 text-cyan-400',
    hover: 'hover:border-cyan-500/30',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]',
    badge: 'border-blue-800/50 bg-blue-950/50 text-blue-400',
    hover: 'hover:border-blue-500/30',
  },
};

const Timeline = ({ title, icon: Icon, items, accent, titleKey, subKey, from }) => {
  const a = accents[accent];
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className={`rounded-2xl p-3 ${a.icon}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="ml-6 space-y-8 border-l border-slate-800">
        {items.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: from }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease }}
            className="relative pl-8"
          >
            <span className={`absolute -left-[6.5px] top-7 h-3 w-3 rounded-full ${a.dot}`} />
            <div className={`glass-card rounded-2xl p-6 transition-colors ${a.hover}`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h4 className="text-lg font-bold text-white">{entry[titleKey]}</h4>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${a.badge}`}>
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-400">{entry[subKey]}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => (
  <section id="experience" className="relative scroll-mt-24 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        subtitle="The path that shaped how I design and build."
      />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <Timeline
          title="Work Experience"
          icon={Briefcase}
          items={experienceData}
          accent="cyan"
          titleKey="role"
          subKey="company"
          from={-30}
        />
        <Timeline
          title="Education"
          icon={GraduationCap}
          items={educationData}
          accent="blue"
          titleKey="degree"
          subKey="institution"
          from={30}
        />
      </div>
    </div>
  </section>
);