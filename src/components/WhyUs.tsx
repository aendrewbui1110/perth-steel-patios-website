import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Wrench, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    title: '15+ Years Experience',
    description: 'Over a decade and a half of local expertise building steel structures across the Perth metro area.',
    icon: Calendar,
  },
  {
    title: 'Premium WA Steel',
    description: 'We only use BlueScope and Colorbond-accredited materials — specified for the Australian climate.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom Engineering',
    description: 'Every structure is engineered to comply with AS 1684 and WA council requirements. No shortcuts.',
    icon: Wrench,
  },
  {
    title: '10-Year Warranty',
    description: 'Backed by our written structural warranty. Not a marketing claim — a document you keep.',
    icon: ThumbsUp,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0C0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
              Built Tough For<br />
              <span className="text-[#C8713A]">Western Australia</span>
            </h3>
            <div className="w-16 h-0.5 bg-[#C8713A] mb-8" />
            <p className="text-lg text-[#858580] leading-relaxed mb-8">
              At Perth Steel Patios, we don't cut corners. We build premium, heavy-duty steel structures
              designed specifically for the Australian climate. Our commitment to quality materials and
              expert craftsmanship means your investment lasts a lifetime.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#C8713A] text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-[#B5632E] transition-colors duration-200"
            >
              Talk to Our Team
            </a>
          </motion.div>

          {/* Right — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#151412] border border-[#22211E] p-7 rounded-lg hover:border-[#3D6B5C]/30 transition-colors duration-200 group"
              >
                <div className="w-11 h-11 bg-[#3D6B5C]/10 border border-[#3D6B5C]/20 rounded flex items-center justify-center mb-5 group-hover:bg-[#3D6B5C]/20 transition-colors">
                  <reason.icon size={20} className="text-[#3D6B5C]" />
                </div>
                <h4 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide mb-3">
                  {reason.title}
                </h4>
                <p className="text-[#858580] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
