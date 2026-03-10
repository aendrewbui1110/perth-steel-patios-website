import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Renovations } from '../components/Renovations';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
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
