import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MobileCTA } from '../components/MobileCTA';
import { FloatingQuote } from '../components/FloatingQuote';
import { ExitIntent } from '../components/ExitIntent';
import { ScrollToTop } from '../components/ScrollToTop';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0C0C0F] text-[#EAE6DF] font-sans selection:bg-[#C8713A] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-[#C8713A] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:text-sm focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-screen bg-[#0C0C0F]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileCTA />
      <FloatingQuote />
      <ExitIntent />
    </div>
  );
}
