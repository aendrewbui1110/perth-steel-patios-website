import { motion } from 'motion/react';
import { ArrowRight, Wrench, Trash2, RefreshCw } from 'lucide-react';

const renovationTypes = [
  {
    icon: RefreshCw,
    title: 'Roof Sheet Replacement',
    description:
      "Is your Colorbond faded, rusted, or leaking? We strip back the old sheets and re-roof your existing steel frame — faster and more cost-effective than a full rebuild. Includes re-flashing and gutter replacement where required.",
  },
  {
    icon: Wrench,
    title: 'Structural Refresh',
    description:
      "Your frame might still be sound but showing its age. We repair or replace corroded posts and beams, re-prime and repaint the steelwork, and fit new Colorbond cladding — transforming the look without the cost of starting from scratch.",
  },
  {
    icon: Trash2,
    title: 'Full Demolition & Rebuild',
    description:
      "Sometimes the old structure isn't worth saving. We handle the complete removal — posts, beams, footings, concrete piers — and dispose of all materials responsibly. Then we build your new patio fresh, exactly how you want it.",
  },
];

export function Renovations() {
  return (
    <section id="renovations" className="py-24 bg-[#0D0D11] border-t border-[#1A1A20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Patio Renovations
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
              Old Patio Getting Tired?<br />
              <span className="text-[#D4622A]">We Handle Renovations Too.</span>
            </h3>
            <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
          </div>
          <div>
            <p className="text-[#858590] leading-relaxed text-base">
              Not every patio needs to be pulled down and started over. Whether it's a simple roof
              sheet swap, a structural repair, or a complete tear-down and rebuild — we assess
              what you've got, give you an honest recommendation, and get the job done right.
            </p>
            <p className="text-[#5E5E68] text-sm mt-4 leading-relaxed">
              We work on patios originally built by any contractor — not just our own.
            </p>
          </div>
        </div>

        {/* Renovation type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {renovationTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#141418] border border-[#22222A] rounded-xl p-8 flex flex-col gap-5 hover:border-[#D4622A]/35 transition-colors duration-200 group overflow-hidden"
            >
              {/* Faint large number bg */}
              <span className="absolute top-4 right-5 font-heading text-7xl font-bold text-[#D4622A]/5 select-none leading-none">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4622A]/20 transition-colors duration-200">
                <item.icon size={22} className="text-[#D4622A]" />
              </div>

              {/* Content */}
              <div>
                <h4 className="font-heading text-lg font-bold text-[#EAE6DF] uppercase tracking-wide mb-3">
                  {item.title}
                </h4>
                <p className="text-[#858590] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#D4622A]/10 border border-[#D4622A]/25 rounded-xl px-8 py-6"
        >
          <div>
            <p className="text-[#EAE6DF] font-semibold mb-1">Not sure if yours is worth saving?</p>
            <p className="text-[#858590] text-sm">
              We do free on-site assessments — we'll tell you honestly whether to repair or replace.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-3.5 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200 group"
          >
            Book a Free Assessment
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
