import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  Wrench,
  Heart,
  MapPin,
  Shield,
  Building,
  ShieldCheck,
  Award,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { suburbs } from '../data/suburbs';
import SEOHead from '../components/SEOHead';

const values = [
  {
    icon: Wrench,
    title: 'Quality Craftsmanship',
    description:
      'Every weld, every bolt, every connection is done right. We build structures you can trust for decades — no shortcuts, no compromises on materials or workmanship.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'We keep you informed at every step — from the initial quote through council approval to final handover. If something changes, you hear about it immediately.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'We know Perth. The soil conditions, the coastal winds, the council processes — our local knowledge saves you time, money, and headaches.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'BlueScope steel, Colorbond roofing, hot-dip galvanised connections. Every structure is engineered for the harsh WA climate and backed by a 10-year warranty.',
  },
];

const credentials = [
  { icon: Building, label: 'WA Builder\'s License' },
  { icon: ShieldCheck, label: '$20M Public Liability' },
  { icon: Award, label: 'HIA Member' },
  { icon: CheckCircle, label: 'BlueScope Accredited' },
  { icon: Clock, label: '10-Year Structural Warranty' },
];

const teamMembers = [
  { name: 'Andrew', role: 'Director & Lead Builder' },
  { name: 'Engineering Team', role: 'Structural Design & Certification' },
  { name: 'Installation Crew', role: 'On-Site Build & Finish' },
];

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us | Perth Steel Patios"
        description="Family-owned Perth patio builders with 15+ years experience. Licensed, insured, and committed to quality steel outdoor structures across the metro area."
        path="/about"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5E5E68] mb-8">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590]">About</span>
          </nav>

          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            Who We Are
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            About Perth Steel Patios
          </h1>
          <p className="mt-4 text-[#858590] max-w-2xl leading-relaxed">
            A family-owned Perth business building premium steel outdoor structures since 2009.
          </p>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight mb-6">
                15+ Years Serving Perth Homeowners
              </h3>
              <div className="space-y-4 text-[#858590] leading-relaxed">
                <p>
                  Perth Steel Patios started with a simple idea: build outdoor structures the way they
                  should be built — with quality steel, proper engineering, and no cutting corners.
                  What began as a one-man operation has grown into a full-service team handling every
                  aspect of the process.
                </p>
                <p>
                  We're a family-owned, Perth-based business. We live here, we work here, and our
                  reputation matters. That's why we treat every project like it's our own backyard
                  — because our name is on every structure we build.
                </p>
                <p>
                  Over 500 installations across the Perth metro area later, our approach hasn't changed.
                  We still do a thorough site inspection, design a structure that suits your home, handle
                  all council approvals, and build it ourselves with our own crew. No subcontractors,
                  no surprises.
                </p>
              </div>
            </motion.div>

            {/* Placeholder Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="aspect-[4/3] bg-[#1C1C22] border border-[#22222A] rounded-xl flex items-center justify-center"
            >
              <span className="text-[#5E5E68] text-sm uppercase tracking-widest font-bold">
                Our Story
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              What Drives Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#141418] border border-[#22222A] p-8 rounded-xl flex gap-5"
              >
                <div className="w-12 h-12 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-[#D4622A]" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#858590] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-[#0D0D11] border-y border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex flex-col items-center text-center gap-3 py-4"
              >
                <div className="w-14 h-14 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded-full flex items-center justify-center">
                  <cred.icon size={24} className="text-[#D4622A]" />
                </div>
                <span className="text-[#EAE6DF] text-xs font-bold uppercase tracking-wider leading-tight">
                  {cred.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Where We Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Service Areas
            </h3>
            <p className="text-[#858590] mb-10 max-w-2xl leading-relaxed">
              We service all of the Perth metropolitan area — from Yanchep in the north to Mandurah
              in the south, and everywhere in between.
            </p>

            <div className="flex flex-wrap gap-3">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  to={`/areas/${suburb.slug}`}
                  className="inline-block bg-[#1C1C22] border border-[#22222A] hover:border-[#D4622A]/50 text-[#858590] hover:text-[#EAE6DF] px-4 py-2 rounded-lg text-sm transition-all duration-200"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              The People Behind the Builds
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Meet the Team
            </h3>
            <p className="text-[#858590] mb-10 max-w-2xl leading-relaxed">
              Our team of licensed builders and engineers brings decades of combined experience
              to every project. We don't use subcontractors — every build is done by our own crew.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#141418] border border-[#22222A] rounded-xl p-8 text-center"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 bg-[#1C1C22] border border-[#22222A] rounded-full mx-auto mb-5 flex items-center justify-center">
                    <span className="text-[#5E5E68] text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#858590] text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111115] border-t border-[#1A1A20]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Ready to Transform Your Outdoor Space?
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
