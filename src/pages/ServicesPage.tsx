import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import { Renovations } from '../components/Renovations';
import SEOHead from '../components/SEOHead';

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Our Services | Perth Steel Patios"
        description="Explore our full range of steel patio styles — flat roof, gable, skillion, carports, pergolas, and custom commercial builds across Perth."
        path="/services"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5E5E68] mb-8">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590]">Services</span>
          </nav>

          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            What We Build
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-[#858590] max-w-2xl leading-relaxed">
            From sleek flat roofs to statement gables, freestanding pergolas to large-format commercial builds
            — we design, engineer, and install steel structures built for the WA climate.
          </p>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block bg-[#1C1C22] border border-[#22222A] rounded-xl p-8 hover:border-[#D4622A]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Large faded number */}
                  <span className="absolute top-4 right-5 font-heading text-8xl font-bold text-[#D4622A]/5 group-hover:text-[#D4622A]/10 transition-colors leading-none select-none">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="font-heading text-lg font-bold text-[#EAE6DF] uppercase tracking-wide mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#858590] text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#D4622A] text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovations */}
      <Renovations />

      {/* CTA Section */}
      <section className="py-20 bg-[#111115]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Not Sure Which Style Suits Your Home?
            </h2>
            <p className="text-[#858590] mb-8 leading-relaxed">
              We'll help you choose during your free on-site measure and quote. No pressure, no obligation
              — just honest advice from builders who know Perth homes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
