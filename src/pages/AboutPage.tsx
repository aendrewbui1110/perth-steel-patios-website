import { Link } from 'react-router';
import { ArrowRight, ShieldCheck, Calendar, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Calendar,
    title: '15+ Years Experience',
    description: 'We have been building premium steel patios across Perth since 2009. Our experience means fewer surprises and a better result.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Materials Only',
    description: 'We exclusively use BlueScope and Colorbond-accredited steel, specified for the harsh Western Australian climate.',
  },
  {
    icon: Users,
    title: 'Local Perth Team',
    description: 'Our entire team is Perth-based. We know the local councils, the soil conditions, and the weather patterns that matter.',
  },
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed WA builders with $20M public liability insurance and HIA membership. Your project is in safe hands.',
  },
];

export function AboutPage() {
  return (
    <>
      {/* Page hero banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            Who We Are
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            About Perth Steel Patios
          </h1>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-[#858590] leading-relaxed mb-6">
              Perth Steel Patios is a locally owned and operated business specialising in
              custom steel-framed outdoor structures. From patios and carports to pergolas
              and commercial builds, we handle everything from initial design through council
              approvals to final installation.
            </p>
            <p className="text-lg text-[#858590] leading-relaxed">
              We have built over 500 structures across the Perth metro area and pride ourselves
              on honest advice, quality craftsmanship, and a process that keeps you informed
              at every step.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-[#141418] border border-[#22222A] p-8 rounded-lg flex gap-5"
              >
                <div className="w-12 h-12 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-[#D4622A]" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#858590] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-[#111115]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-[#858590] mb-8 leading-relaxed">
            Get in touch for a free, no-obligation quote on your next outdoor project.
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
