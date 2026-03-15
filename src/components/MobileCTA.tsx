import { Link, useLocation } from 'react-router';
import { Phone } from 'lucide-react';

export function MobileCTA() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0C0C0F]/95 backdrop-blur-md border-t border-[#22211E] p-3 flex gap-3 shadow-2xl shadow-black/60">
      <a
        href="tel:1300000000"
        className="flex-1 flex items-center justify-center gap-2 border border-[#2A2922] text-[#EAE6DF] py-3.5 rounded font-bold text-xs uppercase tracking-widest hover:border-[#C8713A]/40 transition-colors"
      >
        <Phone size={14} className="text-[#C8713A]" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex-1 flex items-center justify-center bg-[#C8713A] hover:bg-[#B5632E] text-white py-3.5 rounded font-bold text-xs uppercase tracking-widest transition-colors"
      >
        Get a Quote
      </Link>
    </div>
  );
}
