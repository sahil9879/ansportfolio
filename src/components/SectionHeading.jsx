import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

export const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div {...fadeUp()} className="mx-auto mb-16 max-w-2xl text-center">
    <span className="inline-block rounded-full border border-cyan-800 bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
      {eyebrow}
    </span>
    <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
  </motion.div>
);