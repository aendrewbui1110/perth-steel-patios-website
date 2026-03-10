import { Link } from 'react-router';
import { Logo } from './Logo';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Services',      to: '/services'  },
  { label: 'Why Choose Us', to: '/about'     },
  { label: 'Our Process',   to: '/process'   },
  { label: 'Gallery',       to: '/gallery'   },
  { label: 'Blog',          to: '/blog'      },
  { label: 'Testimonials',  to: '/#testimonials' },
  { label: 'Get a Quote',   to: '/contact'   },
];

const services = [
  'Flat Roof Patios', 'Gable Roof Patios', 'Dutch Gable Patios',
  'Skillion Patios', 'Carports', 'Freestanding Pergolas',
  'Custom & Commercial',
];

const suburbs = [
  'Joondalup', 'Mandurah', 'Rockingham', 'Armadale',
  'Ellenbrook', 'Baldivis', 'Fremantle', 'Subiaco',
  'Canning Vale', 'Karrinyup', 'Swan Valley', 'Yanchep',
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080809] border-t border-[#18181D] pt-20 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 mb-5">
              <Logo className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-base tracking-widest text-[#EAE6DF] uppercase">
                  Perth Steel Patios
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#D4622A] font-semibold mt-0.5">
                  WA Construction
                </span>
              </div>
            </Link>
            <p className="text-[#5E5E68] text-sm leading-relaxed mb-6">
              Perth-made, Perth-proud. Building quality steel patios across the metro area for over 15 years.
            </p>

            {/* Social */}
            <div className="flex gap-3 mb-8">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded bg-[#1A1A20] border border-[#26262E] hover:border-[#D4622A]/40 flex items-center justify-center text-[#5E5E68] hover:text-[#D4622A] transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded bg-[#1A1A20] border border-[#26262E] hover:border-[#D4622A]/40 flex items-center justify-center text-[#5E5E68] hover:text-[#D4622A] transition-colors">
                <Instagram size={15} />
              </a>
            </div>

            {/* Credentials */}
            <div className="text-[#3E3E48] text-xs leading-relaxed space-y-1 border-t border-[#18181D] pt-5">
              <p>WA Builders Lic: B12345</p>
              <p>ABN: 00 000 000 000</p>
              <p>$20M Public Liability Insurance</p>
              <p>HIA Member</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold text-[#3E3E48] uppercase tracking-[0.22em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[#5E5E68] hover:text-[#EAE6DF] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold text-[#3E3E48] uppercase tracking-[0.22em] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-[#5E5E68] hover:text-[#EAE6DF] text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + service area */}
          <div>
            <h4 className="text-[10px] font-bold text-[#3E3E48] uppercase tracking-[0.22em] mb-5">Contact</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:1300000000" className="flex items-center gap-3 group">
                <Phone size={14} className="text-[#D4622A] flex-shrink-0" />
                <span className="text-[#5E5E68] group-hover:text-[#EAE6DF] text-sm transition-colors">1300 000 000</span>
              </a>
              <a href="mailto:quotes@perthsteelpatios.com.au" className="flex items-center gap-3 group">
                <Mail size={14} className="text-[#D4622A] flex-shrink-0" />
                <span className="text-[#5E5E68] group-hover:text-[#EAE6DF] text-sm transition-colors break-all">quotes@perthsteelpatios.com.au</span>
              </a>
            </div>

            <h4 className="text-[10px] font-bold text-[#3E3E48] uppercase tracking-[0.22em] mb-3">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {suburbs.map(s => (
                <span key={s} className="text-[#3E3E48] text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#14141A] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#2E2E36] text-xs">
            &copy; {year} Perth Steel Patios. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#2E2E36]">
            <a href="#" className="hover:text-[#5E5E68] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5E5E68] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
