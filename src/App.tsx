/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { Stats }        from './components/Stats';
import { Services }     from './components/Services';
import { Renovations }  from './components/Renovations';
import { WhyUs }        from './components/WhyUs';
import { Process }      from './components/Process';
import { Gallery }      from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CtaBanner }    from './components/CtaBanner';
import { Contact }      from './components/Contact';
import { Footer }       from './components/Footer';
import { MobileCTA }    from './components/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#EAE6DF] font-sans selection:bg-[#D4622A] selection:text-white">
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
