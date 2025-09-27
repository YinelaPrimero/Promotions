import CategoriesSection from '../components/CategoriesSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Las Mejores
              <span className="block text-secondary-400">Promociones</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Descubre ofertas exclusivas y descuentos increíbles en todas las categorías. 
              ¡Ahorra más con PromoHub!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                Explorar Ofertas
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                Ver Categorías
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-white bg-opacity-5 rounded-full"></div>
          <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-white bg-opacity-3 rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir PromoHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos tu mejor aliado para encontrar las promociones más increíbles del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ofertas Exclusivas</h3>
              <p className="text-gray-600">
                Accede a promociones exclusivas que no encontrarás en ningún otro lugar.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Actualizaciones Diarias</h3>
              <p className="text-gray-600">
                Nuevas ofertas cada día para que siempre encuentres algo nuevo y emocionante.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
              <p className="text-gray-600">
                Encuentra rápidamente lo que buscas con nuestra interfaz intuitiva y organizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">1000+</div>
              <div className="text-gray-300">Promociones Activas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">50K+</div>
              <div className="text-gray-300">Usuarios Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">9</div>
              <div className="text-gray-300">Categorías Principales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">24/7</div>
              <div className="text-gray-300">Actualizaciones</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;