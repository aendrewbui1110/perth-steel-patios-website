import { useState, useEffect, useRef } from 'react';
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

interface HeroVideoProps {
  videoSrc?: string;
  posterImage?: string;
}

export function HeroVideo({ videoSrc = '', posterImage = heroBg }: HeroVideoProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const showVideo = videoSrc && !videoFailed && !isMobile;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0C0C0F]">
      {/* Background: video or poster */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage}
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover opacity-70"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={posterImage}
            alt="Steel patio construction Perth"
            className="w-full h-full object-cover opacity-70"
          />
        )}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0F] via-[#0C0C0F]/85 to-[#0C0C0F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0F] via-transparent to-transparent" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8713A]/15 border border-[#C8713A]/30 text-[#C8713A] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8713A] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Perth, Western Australia</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#EAE6DF] leading-[1.05] mb-6 uppercase tracking-tight">
              Premium Steel Patios,{' '}
              <br />
              <span className="text-[#C8713A]">Built for WA.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#858580] mb-10 max-w-2xl leading-relaxed font-light">
              Engineered for durability and designed for the Australian lifestyle.
              We specialise in custom steel-framed patios, carports, and outdoor structures
              that stand the test of time — installed right the first time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#C8713A] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#B5632E] transition-colors duration-200 shadow-lg shadow-[#C8713A]/20"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[#3A3932] text-[#EAE6DF] font-bold text-sm uppercase tracking-widest rounded hover:border-[#C8713A]/50 hover:text-[#C8713A] transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-[#1E1D1A]">
              {trustStats.map(({ icon: Icon, value, label, fill }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#C8713A]/10 border border-[#C8713A]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#C8713A]" {...(fill ? { fill: '#C8713A' } : {})} />
                  </div>
                  <div>
                    <div className="text-[#EAE6DF] font-heading font-bold text-base leading-tight">{value}</div>
                    <div className="text-[#5E5E58] text-[11px] uppercase tracking-wider leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
