import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  PenTool,
  Factory,
  Hammer,
  Plus,
  Minus,
  FileCheck,
  ImageIcon,
  type LucideIcon,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  whatHappens: string;
  whatYouNeed: string;
  timeline: string;
  specialNote?: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Free Quote & Site Visit',
    icon: MessageSquare,
    whatHappens:
      'We visit your property, take measurements, assess the site conditions, and discuss your vision. You\'ll receive a detailed written quote within 48 hours.',
    whatYouNeed: 'Just an idea of what you want — we\'ll handle the rest.',
    timeline: 'Same-week site visit, 48-hour quote turnaround',
  },
  {
    number: '02',
    title: 'Design & Council Approvals',
    icon: PenTool,
    whatHappens:
      'Our engineers create custom structural drawings to AS 1684 standards. We prepare all documentation and lodge with your local council on your behalf.',
    whatYouNeed: 'Your sign-off on the final design.',
    timeline: '1-2 weeks for design, council approval times vary by area',
    specialNote:
      'We handle all council paperwork — most homeowners don\'t know this is required, and it\'s one of the biggest headaches we remove from the process.',
  },
  {
    number: '03',
    title: 'Fabrication',
    icon: Factory,
    whatHappens:
      'All steel is precision-cut and pre-assembled at our Perth workshop using BlueScope steel and Colorbond roofing. Every component is checked before it leaves our shop.',
    whatYouNeed: 'Nothing — we\'ll keep you updated on progress.',
    timeline: '1-2 weeks depending on complexity',
  },
  {
    number: '04',
    title: 'Installation & Handover',
    icon: Hammer,
    whatHappens:
      'Our team installs your patio, typically in 1-3 days. We clean the site, walk you through the finished product, and hand over your 10-year structural warranty documentation.',
    whatYouNeed: 'Clear access to the installation area.',
    timeline: '1-3 days installation',
  },
];

const faqs = [
  {
    question: 'How long does the whole process take?',
    answer:
      'Typically 4-8 weeks from first contact to completed installation, depending on council approval times.',
  },
  {
    question: 'Do I need council approval for a patio?',
    answer:
      'In most cases, yes. We handle all approvals as part of our service.',
  },
  {
    question: 'What if I\'m not happy with the design?',
    answer:
      'We revise until you\'re 100% satisfied before any fabrication begins.',
  },
  {
    question: 'Do you work on existing patios?',
    answer:
      'Yes — we offer roof replacements, structural refreshes, and full rebuilds.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'All Perth metropolitan suburbs from Yanchep to Mandurah.',
  },
];

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Our Process | Perth Steel Patios"
        description="From first call to final handover — learn how Perth Steel Patios delivers your steel patio project with zero surprises. Free quotes, council approvals handled, quality installation."
        path="/process"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#131311] border-b border-[#1A1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#5E5E58] mb-6">
            <Link to="/" className="hover:text-[#C8713A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858580]">Process</span>
          </div>
          <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">
            From Quote to Completion
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
            How It Works
          </h1>
          <p className="text-[#858580] mt-4 max-w-xl leading-relaxed">
            From first call to final handover, here's exactly what to expect.
          </p>
          <div className="w-16 h-0.5 bg-[#C8713A] mt-6" />
        </div>
      </section>

      {/* Timeline Steps */}
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const Icon = step.icon;

        return (
          <section
            key={step.number}
            className={`py-20 ${index % 2 === 0 ? 'bg-[#0C0C0F]' : 'bg-[#131311]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl md:text-7xl font-bold text-[#C8713A]/15 select-none leading-none">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 bg-[#C8713A]/10 border border-[#C8713A]/25 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-[#C8713A]" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-8">
                    {step.title}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-2">
                        What Happens
                      </h4>
                      <p className="text-[#858580] leading-relaxed">{step.whatHappens}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-2">
                        What You Need
                      </h4>
                      <p className="text-[#858580] leading-relaxed">{step.whatYouNeed}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-2">
                        Timeline
                      </h4>
                      <p className="text-[#858580] leading-relaxed">{step.timeline}</p>
                    </div>

                    {step.specialNote && (
                      <div className="bg-[#C8713A]/5 border border-[#C8713A]/15 rounded-lg p-5 mt-4">
                        <p className="text-[#EAE6DF] text-sm leading-relaxed">
                          {step.specialNote}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Placeholder Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex-1 w-full"
                >
                  <div className="bg-gradient-to-br from-[#1C1A18] to-[#151412] border border-[#28271F] rounded-xl aspect-[4/3] flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-[#28271F]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Council Approval Explainer */}
      <section className="py-20 bg-[#151412]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#C8713A]/10 border border-[#C8713A]/25 rounded-full flex items-center justify-center flex-shrink-0">
                <FileCheck size={24} className="text-[#C8713A]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight">
                Council Approvals — We Handle Everything
              </h2>
            </div>

            <p className="text-[#858580] leading-relaxed mb-8 text-lg">
              Most patio installations in WA require building permits. We manage the entire
              process so you don't have to worry about a thing.
            </p>

            <div className="bg-[#1A1917] border border-[#28271F] rounded-xl p-8 mb-8">
              <h3 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-5">
                What's Involved
              </h3>
              <ul className="space-y-4">
                {[
                  'Structural engineering certification to Australian Standards',
                  'Building permit application prepared and lodged',
                  'Compliance with your local council\'s planning schemes',
                  'All documentation filed and approvals tracked on your behalf',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8713A] mt-2 flex-shrink-0" />
                    <span className="text-[#858580] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#C8713A]/5 border border-[#C8713A]/15 rounded-lg p-6">
              <p className="text-[#EAE6DF] leading-relaxed">
                This is one of the biggest reasons customers choose us — we take the stress
                out of the paperwork so you can focus on enjoying your new outdoor space.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0C0C0F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">
                FAQ
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
                Common Questions
              </h3>
              <div className="w-16 h-0.5 bg-[#C8713A] mx-auto" />
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;
                return (
                  <div
                    key={index}
                    className="bg-[#1A1917] border border-[#28271F] rounded-lg overflow-hidden"
                  >
                    <button
                      id={questionId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-[#EAE6DF] font-semibold text-sm leading-snug">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus size={18} className="text-[#C8713A] flex-shrink-0" />
                      ) : (
                        <Plus size={18} className="text-[#5E5E58] flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div id={answerId} role="region" aria-labelledby={questionId} className="px-6 pb-5">
                        <p className="text-[#858580] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#131311] border-t border-[#1A1917]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
            Ready to Start? Step 1 is Free.
          </h2>
          <p className="text-[#858580] mb-8 leading-relaxed">
            Book your free site visit and quote. No obligation, no pressure — just honest advice on your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8713A] hover:bg-[#B5632E] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
