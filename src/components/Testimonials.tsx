import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Mark T.',
    location: 'Wembley',
    date: 'March 2025',
    text: 'The team at Perth Steel Patios delivered exactly what they promised. The new freestanding patio is rock solid and looks fantastic. Professional from the first quote to the final cleanup.',
    rating: 5,
  },
  {
    name: 'Sarah J.',
    location: 'Canning Vale',
    date: 'February 2025',
    text: "We needed a custom carport to fit an awkward space. They engineered a brilliant solution using quality steel. The structure feels incredibly sturdy and the finish is flawless.",
    rating: 5,
  },
  {
    name: 'David L.',
    location: 'Hillarys',
    date: 'January 2025',
    text: 'Highly recommend. They handled all the council approvals for our attached patio, which took a huge weight off our shoulders. The build quality is exceptional.',
    rating: 5,
  },
  {
    name: 'Trish & Brian K.',
    location: 'Ellenbrook',
    date: 'December 2024',
    text: "From quote to handover in under three weeks. Kept us updated throughout. The finished gable patio has completely transformed our backyard — we're out there every evening.",
    rating: 5,
  },
  {
    name: 'Mike R.',
    location: 'Fremantle',
    date: 'November 2024',
    text: "Got three quotes and Perth Steel Patios were mid-range on price but miles ahead on quality and communication. You can tell by looking at the steel work that it's built to last.",
    rating: 5,
  },
  {
    name: 'Jennifer T.',
    location: 'Subiaco',
    date: 'October 2024',
    text: "Top-notch service from start to finish. They offered design suggestions we hadn't thought of, and the result is genuinely beautiful. Couldn't be happier.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#D4622A] fill-[#D4622A]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">Customer Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4 leading-tight">
              143 Five-Star Reviews<br />and Counting
            </h3>
            <div className="w-16 h-0.5 bg-[#D4622A]" />
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-[#141418] border border-[#22222A] rounded-xl px-7 py-5 flex-shrink-0">
            <div>
              <div className="font-heading text-5xl font-bold text-[#EAE6DF] leading-none mb-1">4.9</div>
              <Stars count={5} />
            </div>
            <div className="pl-5 border-l border-[#22222A]">
              <div className="text-[#858590] text-xs uppercase tracking-wider mb-0.5">Google Rating</div>
              <div className="text-[#EAE6DF] font-semibold text-sm">143 reviews</div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#141418] border border-[#22222A] p-7 rounded-lg relative flex flex-col gap-4 hover:border-[#D4622A]/25 transition-colors duration-200"
            >
              {/* Big quote mark */}
              <Quote size={44} className="text-[#D4622A]/8 absolute top-5 right-5" />

              <Stars count={review.rating} />

              <p className="text-[#858590] italic leading-relaxed text-sm flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#22222A]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#D4622A]/15 border border-[#D4622A]/25 rounded-full flex items-center justify-center text-[#D4622A] font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#EAE6DF] text-sm uppercase tracking-wide">{review.name}</div>
                    <div className="text-[#5E5E68] text-xs uppercase tracking-wider">{review.location}</div>
                  </div>
                </div>
                <div className="text-[#5E5E68] text-xs">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
