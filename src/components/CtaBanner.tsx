import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-[#D4622A] overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
      {/* Dark left gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6 leading-tight">
            Ready to Transform Your<br className="hidden md:block" />
            Outdoor Space?
          </h2>
          <p className="text-xl text-white/75 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Contact Perth Steel Patios today for a free, no-obligation measure and quote.
            Let's build something that lasts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#0D0D11] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#1A1A20] transition-colors duration-200 group shadow-xl shadow-black/30"
            >
              Get Your Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:1300000000"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 border border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-white/20 transition-colors duration-200"
            >
              <Phone size={16} />
              1300 000 000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
