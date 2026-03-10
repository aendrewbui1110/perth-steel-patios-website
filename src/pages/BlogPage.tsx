import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Clock, ImageIcon } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blog-posts';
import SEOHead from '../components/SEOHead';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleCategories = useMemo(() => {
    return blogCategories.filter(
      (cat) => cat.slug === 'all' || blogPosts.some((p) => p.category === cat.slug)
    );
  }, []);

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Blog | Perth Steel Patios"
        description="Patio guides, design ideas, pricing info, and expert advice for Perth homeowners. Everything you need to know before building a steel patio in WA."
        path="/blog"
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#5E5E68] mb-8">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590]">Blog</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Blog
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAE6DF] uppercase tracking-tight leading-tight">
              Patio Guides & Ideas
            </h1>
            <div className="w-16 h-0.5 bg-[#D4622A] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Posts */}
      <section className="py-24 bg-[#0D0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {visibleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? 'bg-[#D4622A] text-white'
                    : 'bg-[#1C1C22] text-[#5E5E68] border border-[#22222A] hover:border-[#D4622A]/50 hover:text-[#EAE6DF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group block bg-[#1C1C22] border border-[#22222A] rounded-xl overflow-hidden hover:border-[#D4622A]/50 hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Image placeholder */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-[#1C1C22] to-[#141418] flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-[#28282F]" />
                        </div>

                        <div className="p-6">
                          {/* Category badge */}
                          <span className="inline-block text-[10px] font-bold text-[#D4622A] uppercase tracking-[0.2em] bg-[#D4622A]/10 px-2.5 py-1 rounded mb-3">
                            {blogCategories.find((c) => c.slug === post.category)?.name ?? post.category}
                          </span>

                          <h3 className="text-[#EAE6DF] font-bold text-base leading-snug mb-2 group-hover:text-[#D4622A] transition-colors duration-200">
                            {post.title}
                          </h3>

                          <p className="text-[#5E5E68] text-sm leading-relaxed line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-[#3E3E48]">
                            <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#1C1C22] border border-[#22222A] rounded-xl p-10 text-center">
                  <p className="text-[#858590]">
                    New articles in this category are coming soon. Check back shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#D4622A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Have a Question?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            If you can't find the answer you're looking for, get in touch. We're happy to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#D4622A] hover:bg-[#EAE6DF] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
