import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Twitter } from 'lucide-react';
import { profileData } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import { Counter } from '../components/Counter';
import { ease } from '../utils/motion';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const socials = [
  { icon: Github, href: profileData.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profileData.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: profileData.socials.twitter, label: 'Twitter' },
];

const chips = [
  { label: 'React', pos: 'top-4 -left-2 sm:-left-8', delay: 0 },
  { label: 'Tailwind', pos: 'bottom-14 -left-4 sm:-left-12', delay: 1.2 },
  { label: 'Node.js', pos: 'top-16 -right-2 sm:-right-8', delay: 2.2 },
];

export const Hero = () => {
  const typed = useTypewriter(profileData.roles);

  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6 lg:col-span-7"
        >
          <motion.div
            variants={item}
            className="glass-card inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl"
          >
            Building Digital <br />
            <span className="text-gradient">Masterpieces.</span>
          </motion.h1>

          <motion.p variants={item} className="h-8 font-display text-xl text-slate-300 sm:text-2xl">
            I'm a <span className="font-semibold text-cyan-400">{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-400">&nbsp;</span>
          </motion.p>

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-slate-400">
            {profileData.bio}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-95"
            >
              View Works
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition-all hover:border-cyan-500/60 hover:text-cyan-300 active:scale-95"
            >
              Contact Me
            </a>
            <div className="glass-card flex items-center gap-1 rounded-2xl p-1.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-xl p-2.5 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-slate-800/80 pt-8"
          >
            {profileData.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-extrabold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="flex justify-center lg:col-span-5"
        >
          <div className="relative aspect-square w-64 sm:w-80 lg:w-[22rem]">
            <div className="absolute -inset-6 animate-pulse-glow rounded-full bg-gradient-to-tr from-cyan-500/40 to-blue-600/40 blur-3xl" />
            <div className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-cyan-400/40" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl ring-2 ring-cyan-400/50">
              <img src={profileData.image} alt={`${profileData.name} portrait`} className="h-full w-full object-cover" />
            </div>

            {chips.map((chip) => (
              <motion.span
                key={chip.label}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
                className={`glass-card absolute ${chip.pos} rounded-xl px-3 py-1.5 text-xs font-semibold text-cyan-300 shadow-lg`}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 pt-2">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-cyan-400"
          />
        </div>
      </a>
    </section>
  );
};