import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, Shield, Users, Award } from 'lucide-react';
import heroBg from '../assets/hero-1920.jpg';

const trustStats = [
  { icon: Star,   value: '4.9\u2605',    label: '143 Google Reviews', fill: true  },
  { icon: Users,  value: '500+',    label: 'Patios Installed',   fill: false },
  { icon: Award,  value: '15+',     label: 'Years Experience',   fill: false },
  { icon: Shield, value: '10-Year', label: 'Structural Warranty', fill: false },
];

const defaultImages = [heroBg, heroBg, heroBg, heroBg];

interface HeroSlideshowProps {
  images?: string[];
}

export function HeroSlideshow({ images = defaultImages }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  // Detect desktop via matchMedia
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Parallax scroll effect (desktop only)
  useEffect(() => {
    if (!isDesktop) {
      setParallaxY(0);
      return;
    }

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setParallaxY(window.scrollY * 0.5);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop]);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0D11]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slideshow */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(-${parallaxY}px)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Steel patio project ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === activeIndex ? 0.7 : 0,
              animation: i === activeIndex ? 'kenburns 5s ease-out forwards' : 'none',
            }}
          />
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D11] via-[#0D0D11]/85 to-[#0D0D11]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4622A]/15 border border-[#D4622A]/30 text-[#D4622A] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4622A] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Perth, Western Australia</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#EAE6DF] leading-[1.05] mb-6 uppercase tracking-tight">
              Premium Steel Patios,{' '}
              <br />
              <span className="text-[#D4622A]">Built for WA.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#858590] mb-10 max-w-2xl leading-relaxed font-light">
              Engineered for durability and designed for the Australian lifestyle.
              We specialise in custom steel-framed patios, carports, and outdoor structures
              that stand the test of time — installed right the first time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#D4622A] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#B85222] transition-colors duration-200 shadow-lg shadow-[#D4622A]/20"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[#3A3A42] text-[#EAE6DF] font-bold text-sm uppercase tracking-widest rounded hover:border-[#D4622A]/50 hover:text-[#D4622A] transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-[#1E1E26]">
              {trustStats.map(({ icon: Icon, value, label, fill }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#D4622A]/10 border border-[#D4622A]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#D4622A]" {...(fill ? { fill: '#D4622A' } : {})} />
                  </div>
                  <div>
                    <div className="text-[#EAE6DF] font-heading font-bold text-base leading-tight">{value}</div>
                    <div className="text-[#5E5E68] text-[11px] uppercase tracking-wider leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-[#D4622A] scale-110'
                  : 'bg-[#3A3A42] hover:bg-[#5E5E68]'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
