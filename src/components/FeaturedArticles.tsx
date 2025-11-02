import { Link } from 'react-router-dom';
import articlesData from '../data/articles.json';

interface Article {
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

const FeaturedArticles = () => {
  const articles: Article[] = articlesData.featuredArticles;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth guides and expert insights to help you make informed decisions for your business
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.slug}`}
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative h-64 md:h-full overflow-hidden ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${
                  index % 2 === 1 ? 'md:col-start-1' : ''
                }`}>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">Author</p>
                      </div>
                    </div>

                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                      Continue Reading
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Load More Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
