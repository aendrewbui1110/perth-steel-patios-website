import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';

export function ExitIntent() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Don't run on /contact page
    if (location.pathname === '/contact') return;
    // Don't run on mobile (no mouse)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Already shown this session
    if (sessionStorage.getItem('exitIntentShown')) return;
    // User already submitted a form
    if (sessionStorage.getItem('formSubmitted')) return;

    let ready = sessionStorage.getItem('exitIntentReady') === 'true';
    const timer = ready ? undefined : setTimeout(() => {
      ready = true;
      sessionStorage.setItem('exitIntentReady', 'true');
    }, 5000);

    const handleMouseOut = (e: MouseEvent) => {
      if (!ready) return;
      if (e.clientY >= 0) return;
      if (sessionStorage.getItem('exitIntentShown')) return;
      if (sessionStorage.getItem('formSubmitted')) return;

      sessionStorage.setItem('exitIntentShown', 'true');
      setIsVisible(true);
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [location.pathname]);

  // Escape key closes modal + focus trap
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

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
      setFormData({ name: '', phone: '' });
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }, 1500);
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#141418] border border-[#28282F] rounded-lg text-[#EAE6DF] placeholder-[#5E5E68] text-sm focus:outline-none focus:border-[#D4622A] focus:ring-1 focus:ring-[#D4622A] transition-colors duration-200';
  const labelClass = 'block text-[10px] font-bold text-[#858590] uppercase tracking-[0.18em] mb-2';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Exit intent offer"
            className="relative w-full max-w-md mx-4 bg-[#1C1C22] border border-[#22222A] border-t-2 border-t-[#D4622A] rounded-2xl p-8"
          >
            {/* Close button */}
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#5E5E68] hover:text-[#EAE6DF] transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 size={48} className="text-[#4A7C59]" />
                <p className="text-[#858590] text-sm leading-relaxed">
                  We'll be in touch shortly
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-2">
                  Before You Go...
                </h3>
                <p className="text-[#858590] text-sm leading-relaxed mb-6">
                  Get a free design consultation — no obligation, no pressure.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="ei-name" className={labelClass}>Name *</label>
                    <input
                      type="text" id="ei-name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="ei-phone" className={labelClass}>Phone *</label>
                    <input
                      type="tel" id="ei-phone" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className={inputClass} placeholder="0400 000 000"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
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
                      'Book Free Consultation'
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
