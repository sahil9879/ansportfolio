import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { projectsData } from '../data/projects';
import { ease } from '../utils/motion';

const hasLink = (url) => Boolean(url) && url !== '#';

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.12, ease }}
    whileHover={{ y: -8, transition: { duration: 0.25, delay: 0 } }}
    className="glass-card group flex flex-col overflow-hidden rounded-3xl transition-colors hover:border-cyan-500/40 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.35)]"
  >
    <div className="relative aspect-video overflow-hidden bg-slate-900">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      <span className="absolute right-3 top-3 rounded-full border border-cyan-500/20 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
        {project.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-lg bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-slate-800/80 pt-5">
        {hasLink(project.link) ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500/10 py-2.5 text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-slate-950"
          >
            Live Demo <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-slate-800/40 py-2.5 text-sm font-semibold text-slate-500">
            Demo coming soon
          </span>
        )}
        {hasLink(project.github) && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
            className="glass-card rounded-xl p-2.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export const Projects = () => (
  <section id="projects" className="relative scroll-mt-24 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Selected Works"
        title="Featured Projects"
        subtitle="A showcase of recent web apps, user interfaces, and creative digital experiences."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);