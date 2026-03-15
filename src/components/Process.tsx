import { motion } from 'motion/react';
import { MessageSquare, PenTool, Factory, Hammer } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Free Quote',
    description: 'We visit your site, take measurements, discuss your vision, and provide a detailed no-obligation quote within 48 hours.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Design & Approvals',
    description: 'Our team creates custom drawings and handles all necessary council permits. You review and sign off before we order a single piece of steel.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Fabrication',
    description: 'Your structure is precision-cut and assembled using premium BlueScope steel at our local Perth facility.',
    icon: Factory,
  },
  {
    number: '04',
    title: 'Installation & Handover',
    description: 'Our team installs efficiently and leaves your site clean. We walk you through the finished structure and hand over your warranty documents.',
    icon: Hammer,
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 scroll-mt-20 bg-[#151412] border-t border-[#22211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
            Simple Process, Zero Surprises
          </h3>
          <div className="w-16 h-0.5 bg-[#C8713A] mx-auto mb-6" />
          <p className="text-[#858580] leading-relaxed">
            We handle everything from initial design to council approvals and final construction.
            A seamless, professional experience from the first call to handover day.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-11 left-0 w-full h-px bg-[#22211E] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="w-22 h-22 w-[88px] h-[88px] bg-[#1A1917] border-2 border-[#C8713A]/40 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/40 group-hover:border-[#C8713A] group-hover:bg-[#C8713A]/10 transition-all duration-300">
                  <step.icon size={30} className="text-[#C8713A]" />
                </div>

                {/* Step number — faint behind */}
                <div className="absolute top-0 right-0 -mr-3 -mt-3 font-heading text-6xl font-bold text-[#C8713A]/8 -z-10 select-none">
                  {step.number}
                </div>

                <h4 className="font-heading text-lg font-bold text-[#EAE6DF] uppercase tracking-wide mb-3">
                  {step.title}
                </h4>
                <p className="text-[#858580] leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
