import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MobileCTA } from '../components/MobileCTA';
import { ScrollToTop } from '../components/ScrollToTop';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#EAE6DF] font-sans selection:bg-[#D4622A] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
