import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

const FILTERS = ['All', 'Gable', 'Flat Roof', 'Skillion', 'Carport', 'Custom'];

const projects = [
  { id: 1, type: 'Gable',    title: 'Gable Patio',          location: 'Joondalup',   image: 'https://picsum.photos/seed/patio1/800/600',  aspect: 'aspect-[4/3]',    desc: 'Large gable patio with downlights and ceiling fan over pool area.' },
  { id: 2, type: 'Carport',  title: 'Double Carport',       location: 'Fremantle',   image: 'https://picsum.photos/seed/carport1/800/900', aspect: 'aspect-[3/4]',    desc: 'Double bay carport in Monument grey, matching the home render.' },
  { id: 3, type: 'Flat Roof',title: 'Flat Roof Alfresco',   location: 'Scarborough', image: 'https://picsum.photos/seed/patio2/800/800',  aspect: 'aspect-square',   desc: 'Sleek flat roof alfresco seamlessly extending the living space.' },
  { id: 4, type: 'Custom',   title: 'Freestanding Pergola', location: 'Mandurah',    image: 'https://picsum.photos/seed/gazebo1/800/800', aspect: 'aspect-square',   desc: 'Freestanding steel pergola for a large rear entertaining zone.' },
  { id: 5, type: 'Skillion', title: 'Skillion Patio',       location: 'Osborne Park',image: 'https://picsum.photos/seed/shade1/800/600',  aspect: 'aspect-[4/3]',    desc: 'Architectural skillion with café blinds for full weather protection.' },
  { id: 6, type: 'Gable',   title: 'Dutch Gable Patio',    location: 'Rockingham',  image: 'https://picsum.photos/seed/patio3/800/900',  aspect: 'aspect-[3/4]',    desc: 'Dutch gable with timber-look lining boards and LED strip lighting.' },
  { id: 7, type: 'Flat Roof',title: 'Flat Roof Verandah',  location: 'Subiaco',     image: 'https://picsum.photos/seed/patio4/800/600',  aspect: 'aspect-[4/3]',    desc: 'Minimalist flat roof wrapping the north-facing elevation.' },
  { id: 8, type: 'Carport',  title: 'Single Carport',      location: 'Baldivis',    image: 'https://picsum.photos/seed/carport2/800/800',aspect: 'aspect-square',   desc: 'Single bay carport in Ironstone — sturdy and low-maintenance.' },
  { id: 9, type: 'Gable',   title: 'Gable Patio',          location: 'Ellenbrook',  image: 'https://picsum.photos/seed/patio5/800/900',  aspect: 'aspect-[3/4]',    desc: 'Full backyard gable covering 55m² with Colorbond Woodland Grey.' },
];

type Project = typeof projects[0];

export function Gallery() {
  const [filter, setFilter]     = useState('All');
  const [lightbox, setLightbox] = useState<Project | null>(null);

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
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
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
                  onClick={() => setLightbox(project)}
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
                <p className="text-[#858590] text-sm leading-relaxed mb-6">{lightbox.desc}</p>
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
