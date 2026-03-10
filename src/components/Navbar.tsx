import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Logo } from './Logo';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

interface DropdownItem {
  label: string;
  to: string;
}

const serviceDropdownItems: DropdownItem[] = [
  { label: 'All Services', to: '/services' },
  ...services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
];

const aboutDropdownItems: DropdownItem[] = [
  { label: 'Our Story', to: '/about' },
  { label: 'Our Process', to: '/process' },
  { label: 'Service Areas', to: '/about#service-areas' },
];

type DropdownKey = 'services' | 'about';
type MobileAccordion = 'services' | 'about' | null;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<MobileAccordion>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 150);
  };

  const handleSectionClick = (hash: string) => {
    setOpenDropdown(null);
    if (pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + hash);
    }
  };

  const isActivePath = (to: string) => {
    if (to.includes('#')) return false;
    return pathname === to;
  };

  const toggleMobileAccordion = (key: MobileAccordion) => {
    setExpandedMobile((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobile(null);
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

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleSectionClick('#services')}
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#9A9A94] hover:text-[#EAE6DF] transition-colors duration-200"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-[#151412] border border-[#22211E] rounded-xl shadow-2xl shadow-black/50 p-2 transition-all duration-150 ${
                    openDropdown === 'services'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        isActivePath(item.to)
                          ? 'text-[#C8713A] bg-[#1C1A18]'
                          : 'text-[#9A9A94] hover:text-[#EAE6DF] hover:bg-[#1C1A18]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleSectionClick('#why-us')}
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#9A9A94] hover:text-[#EAE6DF] transition-colors duration-200"
                >
                  About
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-52 bg-[#151412] border border-[#22211E] rounded-xl shadow-2xl shadow-black/50 p-2 transition-all duration-150 ${
                    openDropdown === 'about'
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        isActivePath(item.to)
                          ? 'text-[#C8713A] bg-[#1C1A18]'
                          : 'text-[#9A9A94] hover:text-[#EAE6DF] hover:bg-[#1C1A18]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gallery - direct link */}
              <Link
                to="/gallery"
                className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  pathname === '/gallery' ? 'text-[#C8713A]' : 'text-[#9A9A94] hover:text-[#EAE6DF]'
                }`}
              >
                Gallery
              </Link>

              {/* Blog - direct link */}
              <Link
                to="/blog"
                className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  pathname === '/blog' ? 'text-[#C8713A]' : 'text-[#9A9A94] hover:text-[#EAE6DF]'
                }`}
              >
                Blog
              </Link>
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
              onClick={closeMobileMenu}
              className="text-[#9A9A94] hover:text-white p-2"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
            {/* Services accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('services')}
                className="w-full flex items-center justify-between font-heading text-3xl font-bold text-[#EAE6DF] py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase"
              >
                Services
                <ChevronDown
                  size={22}
                  className={`text-[#5E5E58] transition-transform duration-200 ${
                    expandedMobile === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedMobile === 'services' && (
                <div className="flex flex-col gap-1 py-2">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`pl-6 py-2.5 text-xl font-heading tracking-wide uppercase transition-colors ${
                        isActivePath(item.to)
                          ? 'text-[#C8713A]'
                          : 'text-[#858580] hover:text-[#EAE6DF]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileAccordion('about')}
                className="w-full flex items-center justify-between font-heading text-3xl font-bold text-[#EAE6DF] py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase"
              >
                About
                <ChevronDown
                  size={22}
                  className={`text-[#5E5E58] transition-transform duration-200 ${
                    expandedMobile === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedMobile === 'about' && (
                <div className="flex flex-col gap-1 py-2">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className={`pl-6 py-2.5 text-xl font-heading tracking-wide uppercase transition-colors ${
                        isActivePath(item.to)
                          ? 'text-[#C8713A]'
                          : 'text-[#858580] hover:text-[#EAE6DF]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery - direct link */}
            <Link
              to="/gallery"
              onClick={closeMobileMenu}
              className={`font-heading text-3xl font-bold py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase ${
                pathname === '/gallery' ? 'text-[#C8713A]' : 'text-[#EAE6DF]'
              }`}
            >
              Gallery
            </Link>

            {/* Blog - direct link */}
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`font-heading text-3xl font-bold py-4 border-b border-[#1E1D1A] hover:text-[#C8713A] transition-colors tracking-wide uppercase ${
                pathname === '/blog' ? 'text-[#C8713A]' : 'text-[#EAE6DF]'
              }`}
            >
              Blog
            </Link>
          </nav>

          <div className="border-t border-[#1E1D1A] my-4" />

          <div className="flex flex-col gap-3 mt-4">
            <a
              href="tel:1300000000"
              className="flex items-center justify-center gap-2 border border-[#2A2922] text-[#EAE6DF] py-4 rounded font-semibold text-sm uppercase tracking-widest"
            >
              <Phone size={16} className="text-[#C8713A]" />
              1300 000 000
            </a>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
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
