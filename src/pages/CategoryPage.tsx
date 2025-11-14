import { useParams, Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';

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

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/blog/data/articles.json');
        const data = await response.json();
        setArticles(data.featuredArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Mapeo de IDs de categoría a nombres de categoría en los artículos
  const categoryMapping: { [key: string]: string } = {
    'diseno-y-creatividad': 'Diseño y Creatividad',
    'marketing-y-seo': 'Marketing y SEO',
    'hosting-y-web': 'Hosting y Web',
    'productividad-y-ia': 'Productividad y IA',
    'finanzas-y-contabilidad': 'Finanzas y Contabilidad',
    'e-commerce': 'E-commerce',
    'seguridad-y-privacidad': 'Seguridad y Privacidad',
    'multimedia': 'Multimedia',
  };

  // Filtrar artículos según la categoría
  const filteredArticles = useMemo(() => {
    if (categoryId === 'home' || !categoryId) {
      return articles;
    }

    const categoryName = categoryMapping[categoryId];
    if (!categoryName) {
      return [];
    }

    return articles.filter(article => article.category === categoryName);
  }, [categoryId, articles]);

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  // Obtener el nombre de la categoría para mostrar
  const displayCategoryName = categoryId === 'home' || !categoryId
    ? 'Todas las Herramientas y Software'
    : categoryMapping[categoryId] || 'Categoría';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {displayCategoryName}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explora las mejores herramientas y software para potenciar tu negocio
            </p>
            {/*
            <div className="mt-6 flex items-center justify-center space-x-2 text-primary-100">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              {categoryId && categoryId !== 'home' && (
                <>
                  <span>›</span>
                  <span className="text-white font-semibold">{displayCategoryName}</span>
                </>
              )}
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contador de artículos 
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600">
              Mostrando <span className="font-bold text-primary-600">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'artículo' : 'artículos'}
            </p>
          </div>
          */}

          {filteredArticles.length > 0 ? (
            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
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
                            <p className="text-xs text-gray-500">Autor</p>
                          </div>
                        </div>

                        <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                          Leer más
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
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No hay artículos disponibles</h3>
              <p className="text-gray-600 mb-8">Esta categoría está en construcción. Pronto agregaremos contenido.</p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
