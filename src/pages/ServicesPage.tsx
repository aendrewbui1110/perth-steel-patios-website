import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Services } from '../components/Services';
import { Renovations } from '../components/Renovations';

export function ServicesPage() {
  return (
    <>
      {/* Page hero banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            What We Build
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      <Services />
      <Renovations />

      {/* CTA section */}
      <section className="py-20 bg-[#111115]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#858590] mb-8 leading-relaxed">
            Contact us today for a free, no-obligation measure and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
