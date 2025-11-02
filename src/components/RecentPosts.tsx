import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  slug: string;
}

const RecentPosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Top 7 Tips for First-Time Xero Users (From a Bookkeeper's Perspective)",
      excerpt: "Starting with Xero? Discover essential tips from experienced bookkeepers to maximize your efficiency and avoid common pitfalls.",
      category: 'Business',
      date: 'Nov 1, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
      author: 'Sarah Martinez',
      slug: 'top-7-xero-tips-first-time-users'
    },
    {
      id: 2,
      title: 'The Future of Accounting: How Xero Is Using AI to Empower Businesses',
      excerpt: 'Explore how artificial intelligence is revolutionizing accounting software and helping businesses make smarter financial decisions.',
      category: 'Technology',
      date: 'Oct 29, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      author: 'Michael Chen',
      slug: 'future-accounting-xero-ai'
    },
    {
      id: 3,
      title: '5 Game-Changing Xero Integrations You Should Be Using Right Now',
      excerpt: 'Supercharge your Xero experience with these powerful integrations that will save you time and streamline your workflow.',
      category: 'Productivity',
      date: 'Oct 25, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      author: 'David Johnson',
      slug: 'game-changing-xero-integrations'
    },
    {
      id: 4,
      title: 'How Xero Helps Small Businesses Streamline Their Finances in 2025?',
      excerpt: 'Discover the latest features and strategies that are helping small businesses achieve financial clarity and growth.',
      category: 'Finance',
      date: 'Oct 23, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=500&fit=crop',
      author: 'Lisa Anderson',
      slug: 'xero-small-business-finances-2025'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in business and technology
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/article/${post.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <svg className="w-5 h-5 text-primary-600 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            View All Posts
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
