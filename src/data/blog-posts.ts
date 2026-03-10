export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'guides' | 'patio-ideas' | 'news' | 'faqs';
  image: string;
  readTime: string;
}

export const blogCategories = [
  { name: 'All', slug: 'all' },
  { name: 'Guides', slug: 'guides' },
  { name: 'Patio Ideas', slug: 'patio-ideas' },
  { name: 'News', slug: 'news' },
  { name: 'FAQs', slug: 'faqs' },
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Steel vs Timber Patios: Which Is Right for Your Perth Home?',
    slug: 'steel-vs-timber-patios',
    excerpt:
      'Timber has a natural warmth, but steel wins on longevity, maintenance, and fire resistance in WA conditions. We break down the real costs, lifespan, and performance differences so you can make an informed decision for your Perth home.',
    content: '',
    date: '2026-02-15',
    category: 'guides',
    image: '',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Do I Need Council Approval for a Patio in WA?',
    slug: 'council-approval-patio-wa',
    excerpt:
      'Short answer: almost always yes. In Western Australia, most patio and carport structures require a building permit from your local council. We explain the approval process, typical timelines, and how we handle it all for you as part of our service.',
    content: '',
    date: '2026-02-01',
    category: 'guides',
    image: '',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'How Much Does a Patio Cost in Perth? 2026 Price Guide',
    slug: 'patio-cost-perth-2026',
    excerpt:
      'Patio prices in Perth range from $5,000 for a basic flat roof to $25,000+ for a large gable with all the extras. We break down what drives the cost, what you get at each price point, and where to avoid cutting corners.',
    content: '',
    date: '2026-01-20',
    category: 'guides',
    image: '',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: '5 Gable Patio Designs That Transform Perth Backyards',
    slug: '5-gable-patio-designs-perth',
    excerpt:
      'The gable roof is Perth\'s most popular patio style for good reason. From classic peaked designs to modern Dutch gables with timber-look lining, here are five real builds that completely transformed the backyard entertaining experience.',
    content: '',
    date: '2026-01-10',
    category: 'patio-ideas',
    image: '',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Why BlueScope Steel Is the Gold Standard for WA Patios',
    slug: 'bluescope-steel-wa-patios',
    excerpt:
      'Not all steel is created equal. BlueScope\'s Australian-made steel and Colorbond roofing are engineered specifically for our harsh climate — high UV, salt spray, and extreme heat. Here\'s why we use it exclusively and what it means for your patio\'s lifespan.',
    content: '',
    date: '2025-12-15',
    category: 'faqs',
    image: '',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Flat Roof vs Gable Roof: Pros and Cons for Perth Weather',
    slug: 'flat-roof-vs-gable-roof-perth',
    excerpt:
      'Flat roofs are sleek and cost-effective. Gable roofs offer better airflow and a grander feel. Both handle Perth weather well, but the right choice depends on your block, your home style, and how you plan to use the space. We compare them head to head.',
    content: '',
    date: '2025-12-01',
    category: 'faqs',
    image: '',
    readTime: '6 min read',
  },
];
