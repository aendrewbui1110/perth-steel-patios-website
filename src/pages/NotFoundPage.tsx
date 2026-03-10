import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="pt-32 pb-24 bg-[#0D0D11] min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-heading text-[120px] md:text-[180px] font-bold text-[#D4622A]/15 leading-none select-none block">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 -mt-8">
          Page Not Found
        </h1>
        <p className="text-[#858590] mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
