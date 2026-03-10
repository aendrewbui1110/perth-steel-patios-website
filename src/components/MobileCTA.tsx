import { Link, useLocation } from 'react-router';
import { Phone } from 'lucide-react';

export function MobileCTA() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0D0D11]/95 backdrop-blur-md border-t border-[#22222A] p-3 flex gap-3 shadow-2xl shadow-black/60">
      <a
        href="tel:1300000000"
        className="flex-1 flex items-center justify-center gap-2 border border-[#2A2A33] text-[#EAE6DF] py-3.5 rounded font-bold text-xs uppercase tracking-widest hover:border-[#D4622A]/40 transition-colors"
      >
        <Phone size={14} className="text-[#D4622A]" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex-1 flex items-center justify-center bg-[#D4622A] hover:bg-[#B85222] text-white py-3.5 rounded font-bold text-xs uppercase tracking-widest transition-colors"
      >
        Get a Quote
      </Link>
    </div>
  );
}
