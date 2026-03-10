import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#111115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
              Every Patio Style,<br />One High Standard
            </h3>
            <div className="w-16 h-0.5 bg-[#D4622A] mt-5" />
          </div>
          <p className="text-[#858590] leading-relaxed max-w-sm text-sm">
            We specialise in steel structures designed for the Western Australian climate.
            Every project is custom-engineered for strength, longevity, and style.
          </p>
        </div>

        {/* Grid — no per-card CTAs, just clean descriptive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#22222A] rounded-lg overflow-hidden border border-[#22222A]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-[#111115] p-7 flex flex-col gap-3 hover:bg-[#161620] transition-colors duration-200 group"
            >
              {/* Number */}
              <span className="font-heading text-3xl font-bold text-[#D4622A]/25 group-hover:text-[#D4622A]/40 transition-colors leading-none select-none">
                {service.number}
              </span>
              {/* Title */}
              <h4 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide leading-snug">
                {service.title}
              </h4>
              {/* Description */}
              <p className="text-[#858590] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Single CTA below the grid */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#22222A] rounded-lg px-7 py-5 bg-[#141418]">
          <p className="text-[#858590] text-sm">
            Not sure which style suits your home?{' '}
            <span className="text-[#EAE6DF]">We'll help you choose during your free site visit.</span>
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
