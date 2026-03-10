import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Renovations } from '../components/Renovations';
import { WhyUs } from '../components/WhyUs';
import { BeforeAfter } from '../components/BeforeAfter';
import { Process } from '../components/Process';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import heroImage from '../assets/hero-1920.jpg';

export default function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <HeroSlideshow />
      <Stats />
      <Services />
      <Renovations />
      <WhyUs />
      <section className="py-24 border-t border-[#22211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">See The Difference</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#EAE6DF]">Before & After</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              beforeImage={heroImage}
              afterImage={heroImage}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
          </div>
        </div>
      </section>
      <Process />
      <Gallery />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
