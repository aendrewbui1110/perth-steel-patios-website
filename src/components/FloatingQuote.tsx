import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, CheckCircle2, Loader2 } from 'lucide-react';

export function FloatingQuote() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasPulsed, setHasPulsed] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', suburb: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Hide on /contact page
  if (location.pathname === '/contact') return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sessionStorage.setItem('formSubmitted', 'true');
      setFormData({ name: '', phone: '', suburb: '' });
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#141418] border border-[#28282F] rounded-lg text-[#EAE6DF] placeholder-[#4A4A54] text-sm focus:outline-none focus:border-[#D4622A] transition-colors duration-200';
  const labelClass = 'block text-[10px] font-bold text-[#858590] uppercase tracking-[0.18em] mb-2';

  return (
    <div className="fixed right-6 bottom-6 z-30 hidden lg:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-label="Quick quote form"
            className="absolute bottom-16 right-0 w-80 max-w-sm bg-[#1C1C22] border border-[#22222A] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#22222A]">
              <h3 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide">
                Quick Quote
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#5E5E68] hover:text-[#EAE6DF] transition-colors"
                aria-label="Close quote form"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle2 size={40} className="text-[#4A7C59]" />
                  <p className="text-sm text-[#858590] leading-relaxed">
                    We'll call you within 24 hours
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="fq-name" className={labelClass}>Full Name *</label>
                    <input
                      type="text" id="fq-name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="fq-phone" className={labelClass}>Phone Number *</label>
                    <input
                      type="tel" id="fq-phone" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className={inputClass} placeholder="0400 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="fq-suburb" className={labelClass}>Suburb *</label>
                    <input
                      type="text" id="fq-suburb" name="suburb" required
                      value={formData.suburb} onChange={handleChange}
                      className={inputClass} placeholder="e.g. Joondalup"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-[#2A2A33] text-[#5E5E68] cursor-not-allowed'
                        : 'bg-[#D4622A] text-white hover:bg-[#B85222]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Request Callback'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        onAnimationComplete={() => setHasPulsed(true)}
        initial={{ scale: 1 }}
        animate={hasPulsed ? {} : { scale: [1, 1.15, 1, 1.1, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative w-14 h-14 rounded-full bg-[#D4622A] text-white shadow-lg hover:bg-[#B85222] transition-colors duration-200 flex items-center justify-center group"
        aria-label="Open quick quote form"
      >
        <MessageSquare size={24} />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-[#1C1C22] text-[#EAE6DF] text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#22222A]">
          Get a Quick Quote
        </span>
      </motion.button>
    </div>
  );
}
