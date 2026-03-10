import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Renovations } from '../components/Renovations';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { Contact } from '../components/Contact';

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
      <Process />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </>
  );
}
