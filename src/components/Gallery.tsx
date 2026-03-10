import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { projects, projectTypes, type Project } from '../data/projects';

export function Gallery() {
  const [filter, setFilter]     = useState('All');
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
    }
    if (lightbox) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      (triggerRef.current as HTMLElement)?.focus();
      triggerRef.current = null;
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const visible = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      <section id="gallery" className="py-24 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header + filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
                Real Patios,<br />Real Perth Homes
              </h3>
              <div className="w-16 h-0.5 bg-[#D4622A]" />
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {projectTypes.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${
                    filter === f
                      ? 'bg-[#D4622A] text-white'
                      : 'bg-[#1A1A20] border border-[#28282F] text-[#858590] hover:border-[#D4622A]/40 hover:text-[#EAE6DF]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {visible.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`relative overflow-hidden rounded-lg group break-inside-avoid cursor-pointer ${project.aspect}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerRef.current = e.currentTarget; setLightbox(project); } }}
                  onClick={(e) => { triggerRef.current = e.currentTarget; setLightbox(project); }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11]/90 via-[#0D0D11]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[#D4622A] text-[10px] font-bold uppercase tracking-widest mb-1">{project.type}</span>
                    <h4 className="text-[#EAE6DF] font-heading font-bold text-lg uppercase tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <span className="text-[#858590] text-xs uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label="Project detail view"
              className="bg-[#18181D] border border-[#28282F] rounded-xl max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  ref={closeBtnRef}
                  onClick={() => setLightbox(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-[#0D0D11]/80 rounded-full flex items-center justify-center text-[#9A9AA4] hover:text-white"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-7">
                <span className="text-[#D4622A] text-[10px] font-bold uppercase tracking-widest">{lightbox.type}</span>
                <h3 className="font-heading text-xl font-bold text-[#EAE6DF] uppercase tracking-wide mt-1 mb-1">
                  {lightbox.title}
                </h3>
                <p className="text-[#858590] text-xs uppercase tracking-wider mb-4">{lightbox.location}</p>
                <p className="text-[#858590] text-sm leading-relaxed mb-6">{lightbox.description}</p>
                <a
                  href="#contact"
                  onClick={() => setLightbox(null)}
                  className="flex items-center justify-center gap-2 w-full bg-[#D4622A] hover:bg-[#B85222] text-white py-3.5 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
                >
                  Get Something Similar <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
