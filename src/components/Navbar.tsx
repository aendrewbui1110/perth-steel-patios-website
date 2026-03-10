import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Services',     to: '/services',      hash: '#services'     },
  { name: 'Why Us',       to: '/about',          hash: '#why-us'       },
  { name: 'Process',      to: '/process',        hash: '#process'      },
  { name: 'Gallery',      to: '/gallery',        hash: '#gallery'      },
  { name: 'Testimonials', to: '/#testimonials',  hash: '#testimonials' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  /** On homepage, scroll to section. On other pages, navigate to the page route. */
  const getNavHref = useCallback(
    (link: typeof navLinks[0]) => {
      if (pathname === '/') {
        // On homepage: Testimonials stays as hash-scroll, others use hash too
        return link.hash;
      }
      // On other pages: navigate to the dedicated page (or hash route for testimonials)
      return link.to;
    },
    [pathname],
  );

  const isActive = (link: typeof navLinks[0]) => {
    if (link.to.startsWith('/#')) return false;
    return pathname === link.to;
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#0C0C0F]/95 backdrop-blur-md border-b border-[#28271F] py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group" aria-label="Perth Steel Patios home">
              <Logo className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg tracking-widest text-[#EAE6DF] uppercase">
                  Perth Steel Patios
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#C8713A] font-semibold mt-0.5">
                  WA Construction
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const href = getNavHref(link);
                const active = isActive(link);

                // If on homepage, use anchor tags for hash scroll
                if (pathname === '/') {
                  return (
                    <a
                      key={link.name}
                      href={href}
                      className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                        active ? 'text-[#C8713A]' : 'text-[#9A9A94] hover:text-[#EAE6DF]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }

                // On other pages, use Link for navigation
                return (
                  <Link
                    key={link.name}
                    to={href}
                    className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                      active ? 'text-[#C8713A]' : 'text-[#9A9A94] hover:text-[#EAE6DF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#C8713A] hover:bg-[#B5632E] text-white px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Get a Free Quote
            </Link>

            {/* Mobile toggle */}
            <button
              ref={menuToggleRef}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-[#EAE6DF] p-2"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0C0C0F] flex flex-col px-6 pt-8 pb-10">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-auto" />
              <span className="font-heading font-bold text-base tracking-widest text-[#EAE6DF] uppercase">
                Perth Steel Patios
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9A9A94] hover:text-white p-2"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => {
              const href = getNavHref(link);

              if (pathname === '/') {
                return (
                  <a
                    key={link.name}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-3xl font-bold text-[#EAE6DF] py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-heading text-3xl font-bold py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase ${
                    isActive(link) ? 'text-[#C8713A]' : 'text-[#EAE6DF]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 mt-10">
            <a
              href="tel:1300000000"
              className="flex items-center justify-center gap-2 border border-[#2A2922] text-[#EAE6DF] py-4 rounded font-semibold text-sm uppercase tracking-widest"
            >
              <Phone size={16} className="text-[#C8713A]" />
              1300 000 000
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center bg-[#C8713A] hover:bg-[#B5632E] text-white py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
