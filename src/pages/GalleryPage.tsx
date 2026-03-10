import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, X, Star } from 'lucide-react';
import { projects, projectTypes, type Project } from '../data/projects';
import SEOHead from '../components/SEOHead';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visible = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
    }
    if (lightbox) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus the close button when lightbox opens
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      // Return focus to the element that opened the lightbox
      (triggerRef.current as HTMLElement)?.focus();
      triggerRef.current = null;
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <SEOHead
        title="Our Work | Perth Steel Patios"
        description="Browse our portfolio of completed steel patio, carport, and pergola projects across Perth. Quality craftsmanship with BlueScope steel and Colorbond roofing."
        path="/gallery"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#5E5E68] mb-6">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590]">Gallery</span>
          </div>
          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            Our Work
          </h1>
          <p className="text-[#858590] mt-4 max-w-xl leading-relaxed">
            Browse our portfolio of completed projects across Perth.
          </p>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-[#0D0D11] border-b border-[#1A1A20] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {projectTypes.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${
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
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {visible.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative overflow-hidden rounded-lg group break-inside-avoid cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerRef.current = e.currentTarget; setLightbox(project); } }}
                  onClick={(e) => { triggerRef.current = e.currentTarget; setLightbox(project); }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11]/90 via-[#0D0D11]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="inline-block bg-[#D4622A] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2 w-fit">
                      {project.type}
                    </span>
                    <h4 className="text-[#EAE6DF] font-bold text-xl uppercase tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <span className="text-[#858590] text-sm uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#111115] border-y border-[#1A1A20]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#EAE6DF]">500+</p>
              <p className="text-[#858590] text-xs uppercase tracking-widest mt-1">Projects Completed</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-[#28282F]" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#EAE6DF]">12+</p>
              <p className="text-[#858590] text-xs uppercase tracking-widest mt-1">Suburbs Served</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-[#28282F]" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <p className="text-2xl md:text-3xl font-bold text-[#EAE6DF]">4.9</p>
                <Star size={20} className="text-[#D4622A] fill-[#D4622A]" />
              </div>
              <p className="text-[#858590] text-xs uppercase tracking-widest mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
            Like What You See? Let's Build Yours.
          </h2>
          <p className="text-[#858590] mb-8 leading-relaxed">
            Every project starts with a free, no-obligation quote. Get in touch and we'll make it happen.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
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
              className="bg-[#18181D] border border-[#28282F] rounded-xl max-w-2xl w-full overflow-hidden"
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
                  className="absolute top-3 right-3 w-9 h-9 bg-[#0D0D11]/80 rounded-full flex items-center justify-center text-[#9A9AA4] hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#D4622A]/15 text-[#D4622A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {lightbox.type}
                  </span>
                  <span className="text-[#5E5E68] text-xs uppercase tracking-wider">
                    {lightbox.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#EAE6DF] uppercase tracking-wide mb-3">
                  {lightbox.title}
                </h3>
                <p className="text-[#858590] text-sm leading-relaxed mb-8">
                  {lightbox.description}
                </p>
                <Link
                  to="/contact"
                  onClick={() => setLightbox(null)}
                  className="flex items-center justify-center gap-2 w-full bg-[#D4622A] hover:bg-[#B85222] text-white py-3.5 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
                >
                  Get Something Similar <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
