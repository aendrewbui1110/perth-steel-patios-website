import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle, Clock, Shield, Wrench, Building, ImageIcon } from 'lucide-react';
import { services } from '../data/services';
import SEOHead from '../components/SEOHead';

const serviceBenefits: Record<string, string[]> = {
  'flat-roof-patios': [
    'Clean, modern aesthetic that suits contemporary homes',
    'Cost-effective option with minimal material waste',
    'Maximum headroom under the structure',
    'Easy drainage setup with concealed guttering',
  ],
  'gable-roof-patios': [
    'Classic peaked design that suits most home styles',
    'Superior ventilation through the roof pitch',
    'Extra ceiling height for an open, airy feel',
    'Excellent rain and wind shedding performance',
  ],
  'dutch-gable-patios': [
    'Best of both worlds — gable looks with skillion airflow',
    'Distinctive architectural feature for your home',
    'Ideal for larger alfresco entertaining areas',
    'Enhanced natural light through clerestory options',
  ],
  'skillion-patios': [
    'Bold, architectural single-pitch design',
    'Low-maintenance with simple drainage',
    'Perfect where roof height restrictions apply',
    'Works beautifully as an attached lean-to structure',
  ],
  'carports': [
    'Protects vehicles from harsh WA sun and storms',
    'Available in single, double, and triple bay sizes',
    'Adds value and street appeal to your property',
    'Full range of Colorbond colours to match your home',
  ],
  'dome-curved-roof': [
    'Striking organic form that stands out',
    'Engineered curved steel frames for structural integrity',
    'Creates a statement entertaining space',
    'Unique design sets your property apart',
  ],
  'freestanding-pergolas': [
    'No wall attachment needed — place anywhere in your yard',
    'Independent footings engineered for WA soil conditions',
    'Ideal for pool areas, garden retreats, and fire pits',
    'Fully customisable size and Colorbond colour',
  ],
  'custom-commercial': [
    'Large-format builds for commercial and residential projects',
    'Full structural engineering and council approvals included',
    'Non-standard shapes, spans, and configurations welcome',
    'Project-managed from concept through to handover',
  ],
};

const serviceSpecs: Record<string, { material: string; buildTime: string; warranty: string }> = {
  'flat-roof-patios': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '2-3 weeks', warranty: '10-Year Structural' },
  'gable-roof-patios': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '2-4 weeks', warranty: '10-Year Structural' },
  'dutch-gable-patios': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '3-4 weeks', warranty: '10-Year Structural' },
  'skillion-patios': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '2-3 weeks', warranty: '10-Year Structural' },
  'carports': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '1-2 weeks', warranty: '10-Year Structural' },
  'dome-curved-roof': { material: 'Curved BlueScope Steel + Colorbond', buildTime: '3-5 weeks', warranty: '10-Year Structural' },
  'freestanding-pergolas': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '2-3 weeks', warranty: '10-Year Structural' },
  'custom-commercial': { material: 'BlueScope Steel + Colorbond Roofing', buildTime: '4-8 weeks', warranty: '10-Year Structural' },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <SEOHead
          title="Service Not Found | Perth Steel Patios"
          description="The service you're looking for could not be found."
          path={`/services/${slug}`}
        />
        <section className="pt-32 pb-24 bg-[#0C0C0F] min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Service Not Found
            </h1>
            <p className="text-[#858580] mb-8">
              We couldn't find the service you're looking for. Check out our full range below.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#C8713A] hover:bg-[#B5632E] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </>
    );
  }

  const benefits = serviceBenefits[service.slug] || [];
  const specs = serviceSpecs[service.slug];
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const description = service.longDescription || service.description;

  return (
    <>
      <SEOHead
        title={`${service.title} | Perth Steel Patios`}
        description={`${service.description} Custom-built ${service.title.toLowerCase()} in Perth using BlueScope steel and Colorbond roofing.`}
        path={`/services/${service.slug}`}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#131311] border-b border-[#1A1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5E5E58] mb-8">
            <Link to="/" className="hover:text-[#C8713A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-[#C8713A] transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-[#858580]">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">
              {service.number}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
              {service.title}
            </h1>
            <div className="w-16 h-0.5 bg-[#C8713A] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Two-Column Content */}
      <section className="py-24 bg-[#0C0C0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left Column (60%) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Description */}
              <p className="text-lg text-[#858580] leading-relaxed mb-10">
                {description}
              </p>

              {/* Key Benefits */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-[#EAE6DF] uppercase tracking-wide mb-6">
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#3D6B5C] flex-shrink-0 mt-0.5" />
                      <span className="text-[#858580] leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering & Materials */}
              <div className="bg-[#151412] border border-[#22211E] rounded-xl p-8">
                <h2 className="text-xl font-bold text-[#EAE6DF] uppercase tracking-wide mb-4">
                  Engineering & Materials
                </h2>
                <p className="text-[#858580] leading-relaxed mb-4">
                  Every {service.title.toLowerCase()} we build uses BlueScope steel framing and Colorbond
                  roofing — the Australian standard for strength and corrosion resistance. Our structures
                  are engineered to comply with AS 1684 and local wind-loading requirements for the Perth
                  metro area.
                </p>
                <p className="text-[#858580] leading-relaxed">
                  All steelwork is hot-dip galvanised or powder-coated for long-term durability. We specify
                  materials rated for the harsh WA climate — high UV, coastal salt spray, and summer storms
                  are all factored into the engineering.
                </p>
              </div>
            </motion.div>

            {/* Right Column (40%) */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1C1A18] to-[#151412] border border-[#22211E] rounded-xl flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-[#28271F]" />
              </div>

              {/* Quick Specs */}
              <div className="bg-[#151412] border border-[#22211E] rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-[#EAE6DF] uppercase tracking-widest mb-2">
                  Quick Specs
                </h3>
                {specs && (
                  <>
                    <div className="flex items-center gap-3 text-sm">
                      <Wrench size={16} className="text-[#C8713A] flex-shrink-0" />
                      <span className="text-[#5E5E58]">Material:</span>
                      <span className="text-[#858580] ml-auto text-right">{specs.material}</span>
                    </div>
                    <div className="border-t border-[#22211E]" />
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-[#C8713A] flex-shrink-0" />
                      <span className="text-[#5E5E58]">Typical Build:</span>
                      <span className="text-[#858580] ml-auto">{specs.buildTime}</span>
                    </div>
                    <div className="border-t border-[#22211E]" />
                    <div className="flex items-center gap-3 text-sm">
                      <Shield size={16} className="text-[#C8713A] flex-shrink-0" />
                      <span className="text-[#5E5E58]">Warranty:</span>
                      <span className="text-[#858580] ml-auto">{specs.warranty}</span>
                    </div>
                    <div className="border-t border-[#22211E]" />
                    <div className="flex items-center gap-3 text-sm">
                      <Building size={16} className="text-[#C8713A] flex-shrink-0" />
                      <span className="text-[#5E5E58]">Council Approval:</span>
                      <span className="text-[#858580] ml-auto">Included</span>
                    </div>
                  </>
                )}
              </div>

              {/* CTA Card */}
              <div className="bg-[#C8713A]/10 border border-[#C8713A]/25 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-[#EAE6DF] mb-2">
                  Get a Free Quote for {service.title}
                </h3>
                <p className="text-[#858580] text-sm mb-5 leading-relaxed">
                  Free on-site measure, design consultation, and no-obligation quote.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C8713A] hover:bg-[#B5632E] text-white px-6 py-3.5 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#131311] border-t border-[#1A1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">
            Other Services
          </h2>
          <h3 className="text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-10">
            Explore More Styles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related, index) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${related.slug}`}
                  className="group relative block bg-[#1C1A18] border border-[#22211E] rounded-xl p-7 hover:border-[#C8713A]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-3 right-4 font-heading text-6xl font-bold text-[#C8713A]/5 group-hover:text-[#C8713A]/10 transition-colors leading-none select-none">
                    {related.number}
                  </span>
                  <div className="relative z-10">
                    <h4 className="font-heading text-base font-bold text-[#EAE6DF] uppercase tracking-wide mb-2">
                      {related.title}
                    </h4>
                    <p className="text-[#858580] text-sm leading-relaxed mb-4">
                      {related.description}
                    </p>
                    <span className="flex items-center gap-2 text-[#C8713A] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#C8713A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Contact us today for a free, no-obligation measure and quote on your new {service.title.toLowerCase()}.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#C8713A] hover:bg-[#EAE6DF] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
