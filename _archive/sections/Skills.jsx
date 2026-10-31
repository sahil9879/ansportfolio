import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { ease } from '../utils/motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease, staggerChildren: 0.05, delayChildren: i * 0.15 + 0.2 },
  }),
};
const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const allSkills = skillCategories.flatMap((c) => c.skills);
const fade = 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)';

export const Skills = () => (
  <section id="skills" className="relative scroll-mt-24 bg-slate-950/40 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Expertise"
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {skillCategories.map(({ title, icon: Icon, skills }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6, transition: { duration: 0.25, delay: 0 } }}
            className="glass-card rounded-3xl p-6 transition-colors hover:border-cyan-500/40"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={chipVariants}
                  className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <div className="flex w-max animate-marquee">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mr-4 whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/70 px-5 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);