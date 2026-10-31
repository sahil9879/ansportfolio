import { navItems } from '../data/navigation';

export const Footer = () => (
  <footer className="border-t border-slate-900 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-500 md:flex-row">
      <p>© {new Date().getFullYear()} ANS. All rights reserved.</p>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-cyan-400">
            {item.label}
          </a>
        ))}
      </nav>
      <p className="text-xs">Built with React, Vite & Tailwind CSS</p>
    </div>
  </footer>
);