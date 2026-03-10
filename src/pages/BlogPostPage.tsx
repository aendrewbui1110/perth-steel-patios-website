import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Clock, ArrowLeft, ImageIcon } from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blog-posts';
import SEOHead from '../components/SEOHead';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEOHead
          title="Post Not Found | Perth Steel Patios"
          description="The blog post you're looking for could not be found."
          path={`/blog/${slug}`}
        />
        <section className="pt-32 pb-24 bg-[#0D0D11] min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-4">
              Post Not Found
            </h1>
            <p className="text-[#858590] mb-8">
              We couldn't find that article. Head back to the blog to browse all posts.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#B85222] text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const categoryLabel =
    blogCategories.find((c) => c.slug === post.category)?.name ?? post.category;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <SEOHead
        title={`${post.title} | Perth Steel Patios`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-[#111115] border-b border-[#1A1A20]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#5E5E68] mb-8 flex-wrap">
            <Link to="/" className="hover:text-[#D4622A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-[#D4622A] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#858590] line-clamp-1">{post.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category badge + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block text-[10px] font-bold text-[#D4622A] uppercase tracking-[0.2em] bg-[#D4622A]/10 px-2.5 py-1 rounded">
                {categoryLabel}
              </span>
              <span className="text-xs text-[#5E5E68]">{formattedDate}</span>
              <span className="flex items-center gap-1 text-xs text-[#5E5E68]">
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAE6DF] tracking-tight leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Image */}
      <section className="bg-[#0D0D11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="aspect-[21/9] bg-gradient-to-br from-[#1C1C22] to-[#141418] border border-[#22222A] rounded-xl flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-[#28282F]" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-[#0D0D11]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {post.content ? (
              <div
                className="prose prose-invert prose-lg max-w-none text-[#858590] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="bg-[#1C1C22] border border-[#22222A] rounded-xl p-10 text-center">
                <p className="text-[#858590] text-lg mb-2">Full article coming soon.</p>
                <p className="text-[#5E5E68] text-sm">
                  In the meantime, feel free to reach out with any questions.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#111115] border-t border-[#1A1A20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold text-[#D4622A] uppercase tracking-[0.2em] mb-3">
              Related Articles
            </h2>
            <h3 className="text-3xl font-bold text-[#EAE6DF] uppercase tracking-tight mb-10">
              Keep Reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group block bg-[#1C1C22] border border-[#22222A] rounded-xl overflow-hidden hover:border-[#D4622A]/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-[#1C1C22] to-[#141418] flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-[#28282F]" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[10px] font-bold text-[#D4622A] uppercase tracking-[0.2em] bg-[#D4622A]/10 px-2.5 py-1 rounded mb-2">
                        {blogCategories.find((c) => c.slug === related.category)?.name ?? related.category}
                      </span>
                      <h4 className="text-[#EAE6DF] font-bold text-sm leading-snug group-hover:text-[#D4622A] transition-colors duration-200">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#3E3E48] mt-2">
                        <Clock size={11} />
                        {related.readTime}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#D4622A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Need Expert Advice?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Talk to our team about your patio project. Free consultation, no obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#D4622A] hover:bg-[#EAE6DF] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
