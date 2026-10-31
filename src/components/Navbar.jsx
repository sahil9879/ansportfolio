import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navItems } from '../data/navigation';
import { ease } from '../utils/motion';

export const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-slate-700/70 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'border-slate-800/60 bg-slate-950/40 backdrop-blur-md'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2 font-display text-xl font-bold text-white">
          <div className="rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 transition-transform group-hover:rotate-6 group-hover:scale-105">
            <Code2 className="h-5 w-5 text-slate-950" />
          </div>
          <span className="tracking-tight">
            ANS<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden items-center justify-center rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-95 md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="p-2 text-slate-400 hover:text-white focus:outline-none md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-card absolute left-4 right-4 top-[84px] flex flex-col gap-1 rounded-2xl p-4 shadow-2xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`rounded-xl px-4 py-3 text-lg font-medium ${
                  activeSection === item.id ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-300'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-cyan-500 py-3 text-center font-bold text-slate-950"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};