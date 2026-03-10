import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Process } from '../components/Process';

export function ProcessPage() {
  return (
    <>
      {/* Page hero banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            From Quote to Completion
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            How It Works
          </h1>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      <Process />

      {/* CTA section */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#858590] mb-8 leading-relaxed">
            The first step is easy. Get in touch and we will take it from there.
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
