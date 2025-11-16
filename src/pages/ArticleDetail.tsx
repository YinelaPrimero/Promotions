import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translateText } from '../services/translationService';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  slug: string;
  affiliateLink: string;
}

const ArticleDetail = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [translatedArticle, setTranslatedArticle] = useState<Article | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/blog/data/articles.json');
        const data = await response.json();
        const foundArticle = data.featuredArticles.find(
          (a: Article) => a.slug === slug
        );
        setArticle(foundArticle);
        setTranslatedArticle(foundArticle);
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
    window.scrollTo(0, 0);
  }, [slug]);

  // Auto-translate when language changes
  useEffect(() => {
    if (!article) return;

    const currentLang = i18n.language.startsWith('en') ? 'en' : 'es';

    // If Spanish, use original
    if (currentLang === 'es') {
      setTranslatedArticle(article);
      return;
    }

    // Translate to English
    const translateArticle = async () => {
      setIsTranslating(true);
      try {
        const [title, excerpt, description, category, readTime] = await Promise.all([
          translateText(article.title, 'en', 'es'),
          translateText(article.excerpt, 'en', 'es'),
          translateText(article.description, 'en', 'es'),
          translateText(article.category, 'en', 'es'),
          translateText(article.readTime, 'en', 'es')
        ]);

        setTranslatedArticle({
          ...article,
          title,
          excerpt,
          description,
          category,
          readTime
        });
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedArticle(article);
      } finally {
        setIsTranslating(false);
      }
    };

    translateArticle();
  }, [i18n.language, article]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">{t('articles.loadingArticle')}</p>
      </div>
    );
  }

  if (!translatedArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('articles.notFound')}</h1>
          <p className="text-gray-600 mb-8">{t('articles.notFoundMessage')}</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            {t('articles.backToHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section with Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={translatedArticle.image}
          alt={translatedArticle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-white">
              <Link to="/" className="hover:text-secondary-400 transition-colors">
                {t('articles.home')}
              </Link>
              <span>/</span>
              <span className="text-secondary-400">{translatedArticle.category}</span>
            </nav>
          </div>
        </div>

        {/* Title and Meta */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {translatedArticle.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {translatedArticle.title}
            </h1>
            <div className="flex items-center space-x-6 text-white text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {translatedArticle.date}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {translatedArticle.readTime}
              </span>
              {isTranslating && (
                <span className="text-secondary-400 animate-pulse">
                  {i18n.language.startsWith('en') ? 'Translating...' : 'Traduciendo...'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Excerpt */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-primary-600 pl-6">
            {translatedArticle.excerpt}
          </p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none">
            {translatedArticle.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-4 border-b border-primary-200">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('articles.readyToKnowMore')}
            </h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('articles.ctaDescription')}
            </p>
            <a
              href={translatedArticle.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              {t('articles.clickForMore')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Back to Articles */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('articles.backToArticles')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
