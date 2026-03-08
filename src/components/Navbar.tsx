import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Services',     href: '#services'     },
  { name: 'Why Us',       href: '#why-us'       },
  { name: 'Process',      href: '#process'      },
  { name: 'Gallery',      href: '#gallery'      },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#0D0D11]/95 backdrop-blur-md border-b border-[#28282F] py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" aria-label="Perth Steel Patios home">
              <Logo className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg tracking-widest text-[#EAE6DF] uppercase">
                  Perth Steel Patios
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#D4622A] font-semibold mt-0.5">
                  WA Construction
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-[#9A9AA4] hover:text-[#EAE6DF] uppercase tracking-widest transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Get a Free Quote
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-[#EAE6DF] p-2"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D11] flex flex-col px-6 pt-8 pb-10">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-auto" />
              <span className="font-heading font-bold text-base tracking-widest text-[#EAE6DF] uppercase">
                Perth Steel Patios
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9A9AA4] hover:text-white p-2"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-3xl font-bold text-[#EAE6DF] py-4 border-b border-[#1E1E24] hover:text-[#D4622A] transition-colors tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-10">
            <a
              href="tel:1300000000"
              className="flex items-center justify-center gap-2 border border-[#2A2A33] text-[#EAE6DF] py-4 rounded font-semibold text-sm uppercase tracking-widest"
            >
              <Phone size={16} className="text-[#D4622A]" />
              1300 000 000
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center bg-[#D4622A] hover:bg-[#B85222] text-white py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
