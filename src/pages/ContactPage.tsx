import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Star,
  ShieldCheck,
  Calendar,
  Award,
  MapPin,
} from 'lucide-react';
import { Contact } from '../components/Contact';
import { suburbs } from '../data/suburbs';
import SEOHead from '../components/SEOHead';

const trustSignals = [
  { icon: Star, label: '4.9\u2605 Google Reviews', sublabel: '143 reviews' },
  { icon: Calendar, label: '15+ Years', sublabel: 'Experience' },
  { icon: ShieldCheck, label: '$20M Public', sublabel: 'Liability' },
  { icon: Award, label: '10-Year', sublabel: 'Warranty' },
];

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us | Perth Steel Patios"
        description="Request a free quote or get in touch with Perth Steel Patios. We service all Perth metro suburbs with quality steel patio installations."
        path="/contact"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#5E5E68] mb-6">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590]">Contact</span>
          </div>
          <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-[#858590] mt-4 max-w-xl leading-relaxed">
            Request a free quote or ask us anything.
          </p>
          <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Form (60%) */}
            <div className="lg:col-span-3">
              <Contact formOnly />
            </div>

            {/* Right: Contact Details Sidebar (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#1A1A20] border border-[#28282F] rounded-xl p-8 sticky top-28">
                <h3 className="text-xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-8">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#D4622A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5E5E68] uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:1300000000"
                        className="text-[#EAE6DF] hover:text-[#D4622A] transition-colors text-lg font-medium"
                      >
                        1300 000 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#D4622A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5E5E68] uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:quotes@perthsteelpatios.com.au"
                        className="text-[#858590] hover:text-[#D4622A] transition-colors font-medium break-all"
                      >
                        quotes@perthsteelpatios.com.au
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#D4622A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5E5E68] uppercase tracking-widest mb-1">
                        Hours
                      </p>
                      <p className="text-[#858590] font-medium">Mon-Fri: 7am - 5pm</p>
                      <p className="text-[#5E5E68] text-sm">Sat: By appointment</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={20} className="text-[#D4622A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5E5E68] uppercase tracking-widest mb-1">
                        Response Time
                      </p>
                      <p className="text-[#858590] text-sm leading-relaxed">
                        We typically respond within 2 hours during business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Suburbs */}
      <section className="py-16 bg-[#111115] border-t border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
                Service Area
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
                We Service All of Perth Metro
              </h3>
              <div className="w-16 h-0.5 bg-[#D4622A] mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  to={`/areas/${suburb.slug}`}
                  className="text-xs font-semibold uppercase tracking-wider text-[#858590] bg-[#1A1A20] border border-[#28282F] px-4 py-2 rounded hover:border-[#D4622A]/40 hover:text-[#EAE6DF] transition-colors duration-200"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-12 bg-[#0D0D11] border-y border-[#1A1A20]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="flex flex-col items-center gap-2">
                  <Icon size={24} className="text-[#D4622A]" />
                  <p className="text-[#EAE6DF] font-bold text-sm">{signal.label}</p>
                  <p className="text-[#5E5E68] text-xs uppercase tracking-widest">{signal.sublabel}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A20] border border-[#28282F] rounded-xl aspect-[21/9] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[#28282F] mx-auto mb-3" />
              <p className="text-[#3A3A44] text-sm uppercase tracking-widest">
                Service Area Map
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
