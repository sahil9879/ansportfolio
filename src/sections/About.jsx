import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { aboutData } from '../data/about';
import { profileData } from '../data/profile';
import { fadeUp } from '../utils/motion';

const codeLines = [
  [['text-sky-400', 'const '], ['text-cyan-300', 'developer'], ['text-slate-400', ' = {']],
  [['text-slate-300', '  name: '], ['text-emerald-300', '"ANS"'], ['text-slate-400', ',']],
  [['text-slate-300', '  role: '], ['text-emerald-300', '"Full Stack Developer"'], ['text-slate-400', ',']],
  [
    ['text-slate-300', '  stack: '], ['text-slate-400', '['],
    ['text-emerald-300', '"React"'], ['text-slate-400', ', '],
    ['text-emerald-300', '"Node.js"'], ['text-slate-400', ', '],
    ['text-emerald-300', '"Tailwind"'], ['text-slate-400', '],'],
  ],
  [['text-slate-300', '  passion: '], ['text-emerald-300', '"Pixel-perfect UI"'], ['text-slate-400', ',']],
  [['text-slate-300', '  available: '], ['text-amber-300', 'true'], ['text-slate-400', ',']],
  [['text-slate-400', '};']],
];

export const About = () => (
  <section id="about" className="relative scroll-mt-24 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow={aboutData.eyebrow} title={aboutData.title} subtitle={aboutData.subtitle} />

      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div {...fadeUp()} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl" />
          <div className="glass-card relative overflow-x-auto rounded-3xl p-6 font-mono text-sm shadow-2xl">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="space-y-1.5">
              {codeLines.map((tokens, i) => (
                <motion.div
                  key={i}
                  className="whitespace-pre"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                >
                  {tokens.map(([cls, text], j) => (
                    <span key={j} className={cls}>{text}</span>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="space-y-6">
          {aboutData.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-slate-400">{p}</p>
          ))}

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {profileData.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {profileData.email}
            </span>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            {aboutData.highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.2 + i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
                className="glass-card rounded-2xl p-5 transition-colors hover:border-cyan-500/40"
              >
                <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Let's work together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);