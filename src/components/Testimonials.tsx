import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials, aggregateRating } from '../data/testimonials';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#C8713A] fill-[#C8713A]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 scroll-mt-20 bg-[#0C0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-[#C8713A] uppercase tracking-[0.2em] mb-3">Customer Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
              {aggregateRating.count} Five-Star Reviews<br />and Counting
            </h3>
            <div className="w-16 h-0.5 bg-[#C8713A]" />
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-[#151412] border border-[#22211E] rounded-xl px-7 py-5 flex-shrink-0">
            <div>
              <div className="font-heading text-5xl font-bold text-[#EAE6DF] leading-none mb-1">{aggregateRating.score}</div>
              <Stars count={5} />
            </div>
            <div className="pl-5 border-l border-[#22211E]">
              <div className="text-[#858580] text-xs uppercase tracking-wider mb-0.5">{aggregateRating.source}</div>
              <div className="text-[#EAE6DF] font-semibold text-sm">{aggregateRating.count} reviews</div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#151412] border border-[#22211E] p-7 rounded-lg relative flex flex-col gap-4 hover:border-[#C8713A]/25 transition-colors duration-200"
            >
              {/* Big quote mark */}
              <Quote size={44} className="text-[#C8713A]/8 absolute top-5 right-5" />

              <Stars count={review.rating} />

              <p className="text-[#858580] italic leading-relaxed text-sm flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#22211E]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C8713A]/15 border border-[#C8713A]/25 rounded-full flex items-center justify-center text-[#C8713A] font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#EAE6DF] text-sm uppercase tracking-wide">{review.name}</div>
                    <div className="text-[#5E5E58] text-xs uppercase tracking-wider">{review.location}</div>
                  </div>
                </div>
                <div className="text-[#5E5E58] text-xs">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
