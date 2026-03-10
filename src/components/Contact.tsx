import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  showHeading?: boolean;
  formOnly?: boolean;
}

export function Contact({ showHeading = true, formOnly = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', suburb: '', type: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]       = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', suburb: '', type: '', message: '' });
    }, 1500);
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#1A1A20] border border-[#2A2A33] rounded text-[#EAE6DF] placeholder-[#4A4A54] text-sm focus:outline-none focus:border-[#D4622A] transition-colors duration-200';
  const labelClass = 'block text-[10px] font-bold text-[#858590] uppercase tracking-[0.18em] mb-2';

  const formCard = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1A20] border border-[#26262E] rounded-xl p-8 md:p-10"
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center" aria-live="polite">
          <CheckCircle2 size={56} className="text-[#4A7C59]" />
          <h4 className="font-heading text-2xl font-bold text-[#EAE6DF] uppercase">Quote Request Sent!</h4>
          <p className="text-[#858590] max-w-xs text-sm leading-relaxed">
            We'll call you back within 1 business day to discuss your project.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name *</label>
              <input type="text" id="name" name="name" required aria-required="true"
                value={formData.name} onChange={handleChange}
                className={inputClass} placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number *</label>
              <input type="tel" id="phone" name="phone" required aria-required="true"
                value={formData.phone} onChange={handleChange}
                className={inputClass} placeholder="0400 000 000" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input type="email" id="email" name="email"
                value={formData.email} onChange={handleChange}
                className={inputClass} placeholder="jane@email.com" />
            </div>
            <div>
              <label htmlFor="suburb" className={labelClass}>Suburb *</label>
              <input type="text" id="suburb" name="suburb" required aria-required="true"
                value={formData.suburb} onChange={handleChange}
                className={inputClass} placeholder="e.g. Joondalup" />
            </div>
          </div>

          <div>
            <label htmlFor="type" className={labelClass}>Type of Structure *</label>
            <select id="type" name="type" required aria-required="true"
              value={formData.type} onChange={handleChange}
              className={inputClass + ' appearance-none'}>
              <option value="" disabled>Select an option...</option>
              <option value="flat">Flat Roof Patio</option>
              <option value="gable">Gable Roof Patio</option>
              <option value="dutch">Dutch Gable Patio</option>
              <option value="skillion">Skillion Patio</option>
              <option value="carport">Carport</option>
              <option value="freestanding">Freestanding Pergola</option>
              <option value="verandah">Verandah</option>
              <option value="custom">Custom / Commercial</option>
              <option value="other">Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Project Details</label>
            <textarea id="message" name="message" rows={4}
              value={formData.message} onChange={handleChange}
              className={inputClass + ' resize-none'}
              placeholder="Tell us a bit about what you're looking for..." />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 font-bold text-sm uppercase tracking-widest rounded transition-all duration-200 ${
              isSubmitting
                ? 'bg-[#2A2A33] text-[#5E5E68] cursor-not-allowed'
                : 'bg-[#D4622A] text-white hover:bg-[#B85222]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send My Quote Request'}
          </button>

          <p className="text-center text-[#5E5E68] text-xs">
            We'll call you back within 1 business day.
          </p>
        </form>
      )}
    </motion.div>
  );

  if (formOnly) {
    return formCard;
  }

  return (
    <section id="contact" className="py-24 bg-[#141418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
              Get a Free Quote
            </h3>
            <div className="w-16 h-0.5 bg-[#D4622A] mx-auto mb-6" />
            <p className="text-[#858590] leading-relaxed">
              Fill out the form below or call us directly. We'll call you back within 1 business day.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Form */}
          {formCard}

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h4 className="font-heading text-2xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-6">
                Contact Information
              </h4>
              <p className="text-[#858590] leading-relaxed mb-8">
                We're a local Western Australian business dedicated to quality steel construction
                across the Perth metro area.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', content: <a href="tel:1300000000" className="text-[#EAE6DF] hover:text-[#D4622A] transition-colors text-lg font-medium">1300 000 000</a> },
                  { icon: Mail,  label: 'Email', content: <a href="mailto:quotes@perthsteelpatios.com.au" className="text-[#858590] hover:text-[#D4622A] transition-colors font-medium break-all">quotes@perthsteelpatios.com.au</a> },
                  { icon: Clock, label: 'Hours', content: (
                    <>
                      <p className="text-[#858590] font-medium">Mon-Fri: 7:00 AM - 5:00 PM</p>
                      <p className="text-[#5E5E68] text-sm">Sat: By Appointment</p>
                    </>
                  )},
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#D4622A]/10 border border-[#D4622A]/20 rounded flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#D4622A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5E5E68] uppercase tracking-widest mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div className="bg-[#1A1A20] border border-[#26262E] rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-[#D4622A]" />
                <h4 className="font-heading text-lg font-bold text-[#EAE6DF] uppercase tracking-wide">Service Area</h4>
              </div>
              <p className="text-[#858590] leading-relaxed text-sm mb-4">
                We service the entire Perth Metropolitan region — from Yanchep in the north
                to Mandurah in the south, and east to the Hills and beyond.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Joondalup','Mandurah','Rockingham','Armadale','Ellenbrook','Baldivis','Fremantle','Subiaco','Canning Vale','Karrinyup','Cottesloe','Swan Valley'].map(s => (
                  <span key={s} className="text-[10px] font-semibold uppercase tracking-wider text-[#5E5E68] bg-[#111115] border border-[#22222A] px-2.5 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
