import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, MapPin, Building, Compass } from 'lucide-react';
import { suburbs } from '../data/suburbs';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import SEOHead from '../components/SEOHead';
import { SuburbCard } from '../components/SuburbCard';

/** Map popular style display names to service slugs */
const styleToSlug: Record<string, string> = {
  'Gable Roof': 'gable-roof-patios',
  'Flat Roof': 'flat-roof-patios',
  'Skillion': 'skillion-patios',
  'Carports': 'carports',
  'Custom': 'custom-commercial',
  'Heritage-Sensitive Designs': 'custom-commercial',
  'Premium Designs': 'custom-commercial',
  'Freestanding Pergolas': 'freestanding-pergolas',
};

export default function SuburbPage() {
  const { suburb: suburbSlug } = useParams<{ suburb: string }>();
  const suburb = suburbs.find((s) => s.slug === suburbSlug);

  if (!suburb) {
    return (
      <>
        <SEOHead
          title="Service Area | Perth Steel Patios"
          description="We service all of Perth metro. Contact us for a free quote."
          path={`/areas/${suburbSlug}`}
        />
        <section className="pt-32 pb-24 bg-[#0D0D11] min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              We Service All of Perth Metro
            </h1>
            <p className="text-[#858590] mb-8 leading-relaxed">
              We couldn't find a dedicated page for that suburb, but we build patios right across the
              Perth metropolitan area. Get in touch and we'll confirm availability for your location.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </>
    );
  }

  const suburbProjects = projects.filter(
    (p) => p.location.toLowerCase() === suburb.name.toLowerCase()
  );

  const suburbTestimonials = testimonials.filter(
    (t) => t.location.toLowerCase() === suburb.name.toLowerCase()
  );

  const nearbySuburbData = suburb.nearbySuburbs
    .map((slug) => suburbs.find((s) => s.slug === slug))
    .filter(Boolean) as typeof suburbs;

  return (
    <>
      <SEOHead
        title={`Steel Patios in ${suburb.name} | Perth Steel Patios`}
        description={`Custom steel patios, carports, and pergolas in ${suburb.name}. ${suburb.council} approved builds using BlueScope steel. Free on-site measure and quote.`}
        path={`/areas/${suburb.slug}`}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#5E5E68] mb-8">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="hover:text-[#D4622A] transition-colors">Areas</span>
            <ChevronRight size={12} />
            <span className="text-[#858590]">{suburb.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              {suburb.region}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
              Steel Patios in {suburb.name}
            </h1>
            <p className="text-lg text-[#858590] leading-relaxed mt-6 max-w-3xl">
              {suburb.description}
            </p>
            <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Suburb Info Section */}
      <section className="py-24 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-6">
                About {suburb.name}
              </h2>
              <p className="text-[#858590] leading-relaxed mb-6">
                {suburb.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Building size={16} className="text-[#D4622A] flex-shrink-0" />
                  <span className="text-[#5E5E68]">Council:</span>
                  <span className="text-[#858590]">{suburb.council}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Compass size={16} className="text-[#D4622A] flex-shrink-0" />
                  <span className="text-[#5E5E68]">Distance from CBD:</span>
                  <span className="text-[#858590]">{suburb.distanceFromCBD}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-[#D4622A] flex-shrink-0" />
                  <span className="text-[#5E5E68]">Region:</span>
                  <span className="text-[#858590]">{suburb.region}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: popular styles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-2xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-6">
                Popular Styles in {suburb.name}
              </h2>
              <div className="space-y-3">
                {suburb.popularStyles.map((style) => {
                  const slug = styleToSlug[style];
                  const service = slug
                    ? services.find((s) => s.slug === slug)
                    : undefined;

                  return (
                    <Link
                      key={style}
                      to={service ? `/services/${service.slug}` : '/services'}
                      className="group flex items-center justify-between bg-[#1C1C22] border border-[#22222A] rounded-lg p-4 hover:border-[#D4622A]/50 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-[#EAE6DF] font-bold text-sm uppercase tracking-wide">
                          {style}
                        </h3>
                        {service && (
                          <p className="text-[#5E5E68] text-xs mt-1 line-clamp-1">
                            {service.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-[#D4622A] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#111115] border-t border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Our Work
            </h2>
            <h3 className="text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-10">
              Projects in {suburb.name}
            </h3>
          </motion.div>

          {suburbProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suburbProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-[#1C1C22] border border-[#22222A] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`${project.aspect} bg-[#141418]`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-[#D4622A] uppercase tracking-[0.2em]">
                      {project.type}
                    </span>
                    <h4 className="text-[#EAE6DF] font-bold mt-1">{project.title}</h4>
                    <p className="text-[#5E5E68] text-sm mt-1">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-[#1C1C22] border border-[#22222A] rounded-xl p-10 text-center">
              <p className="text-[#858590] mb-6">
                We've completed multiple projects in {suburb.name}. Contact us to see examples
                and discuss your build.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-widest transition-colors duration-200"
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Testimonials
            </h2>
            <h3 className="text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-10">
              What {suburb.name} Homeowners Say
            </h3>
          </motion.div>

          {suburbTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suburbTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-[#1C1C22] border border-[#22222A] rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-[#D4622A] text-sm">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-[#858590] leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <span className="text-[#EAE6DF] font-bold">{testimonial.name}</span>
                    <span className="text-[#5E5E68]"> &middot; {testimonial.location} &middot; {testimonial.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-[#1C1C22] border border-[#22222A] rounded-xl p-10 text-center">
              <p className="text-[#858590]">
                Join our growing list of happy customers in {suburb.name}.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Nearby Suburbs */}
      {nearbySuburbData.length > 0 && (
        <section className="py-20 bg-[#111115] border-t border-[#1A1A20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
                Nearby Areas
              </h2>
              <h3 className="text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-10">
                We Also Service Nearby
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbySuburbData.map((nearby, index) => (
                <div key={nearby.slug}>
                  <SuburbCard suburb={nearby} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Council Info Box */}
      <section className="py-20 bg-[#0D0D11]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-[#1C1C22] border border-[#22222A] border-l-4 border-l-[#D4622A] rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-3">
              Building in {suburb.name}?
            </h3>
            <p className="text-[#858590] leading-relaxed mb-2">
              You'll need approval from <span className="text-[#EAE6DF] font-semibold">{suburb.council}</span> before
              construction can begin.
            </p>
            <p className="text-[#858590] leading-relaxed mb-6">
              We handle all council applications as part of our service — including structural
              engineering drawings, site plans, and liaising with the council on your behalf.
            </p>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-[#D4622A] text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all duration-200"
            >
              See Our Full Process <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#D4622A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Ready for a Patio in {suburb.name}?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Contact us today for a free, no-obligation on-site measure and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#D4622A] hover:bg-[#EAE6DF] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
