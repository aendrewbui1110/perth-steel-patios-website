import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Building, ArrowRight } from 'lucide-react';
import type { Suburb } from '../data/suburbs';

interface SuburbCardProps {
  suburb: Suburb;
  index?: number;
}

export function SuburbCard({ suburb, index = 0 }: SuburbCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/areas/${suburb.slug}`}
        className="group block bg-[#1C1A18] border border-[#22211E] rounded-xl p-6 hover:border-[#C8713A]/50 hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-heading text-lg font-bold text-[#EAE6DF] uppercase tracking-wide mb-2">
          {suburb.name}
        </h3>

        <div className="flex items-center gap-2 text-xs text-[#5E5E58] mb-1">
          <MapPin size={12} className="text-[#C8713A] flex-shrink-0" />
          <span>{suburb.region} &middot; {suburb.distanceFromCBD}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#5E5E58] mb-4">
          <Building size={12} className="text-[#C8713A] flex-shrink-0" />
          <span>{suburb.council}</span>
        </div>

        <span className="flex items-center gap-2 text-[#C8713A] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-200">
          View Area <ArrowRight size={12} />
        </span>
      </Link>
    </motion.div>
  );
}
