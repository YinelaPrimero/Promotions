import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  color: string;
}

const CategoriesSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'home',
      name: 'HOME',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600',
      subcategories: ['Decoración', 'Muebles', 'Electrodomésticos', 'Jardín', 'Limpieza', 'Organización']
    },
    {
      id: 'business',
      name: 'BUSINESS',
      icon: '💼',
      color: 'from-gray-600 to-gray-700',
      subcategories: ['Marketing', 'Finanzas', 'Recursos Humanos', 'Oficina', 'Seguros', 'Consultoría']
    },
    {
      id: 'tools-software',
      name: 'TOOLS & SOFTWARE',
      icon: '🛠️',
      color: 'from-purple-500 to-purple-600',
      subcategories: ['Desarrollo', 'Diseño', 'Productividad', 'Seguridad', 'Antivirus', 'Utilidades']
    },
    {
      id: 'life-style',
      name: 'LIFE & STYLE',
      icon: '✨',
      color: 'from-pink-500 to-pink-600',
      subcategories: ['Salud', 'Belleza', 'Fitness', 'Bienestar', 'Mindfulness', 'Autoayuda']
    },
    {
      id: 'fashion',
      name: 'FASHION',
      icon: '👗',
      color: 'from-indigo-500 to-indigo-600',
      subcategories: ['Ropa Mujer', 'Ropa Hombre', 'Zapatos', 'Accesorios', 'Bolsos', 'Joyería']
    },
    {
      id: 'entertainment',
      name: 'ENTERTAINMENT',
      icon: '🎮',
      color: 'from-red-500 to-red-600',
      subcategories: ['Gaming', 'Streaming', 'Música', 'Libros', 'Películas', 'Eventos']
    },
    {
      id: 'travel',
      name: 'TRAVEL',
      icon: '✈️',
      color: 'from-green-500 to-green-600',
      subcategories: ['Hoteles', 'Vuelos', 'Alquiler de Coches', 'Tours', 'Seguros de Viaje', 'Experiencias']
    },
    {
      id: 'about-us',
      name: 'ABOUT US',
      icon: '👥',
      color: 'from-yellow-500 to-yellow-600',
      subcategories: ['Nuestra Historia', 'El Equipo', 'Misión', 'Valores', 'Testimonios', 'Prensa']
    },
    {
      id: 'contact',
      name: 'CONTACT',
      icon: '📞',
      color: 'from-teal-500 to-teal-600',
      subcategories: ['Soporte', 'Ventas', 'Colaboraciones', 'FAQ', 'Ubicación', 'Horarios']
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las mejores promociones organizadas por categorías. 
            Haz clic en cualquier categoría para ver más opciones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Main Category Card */}
              <div
                onClick={() => toggleCategory(category.id)}
                className="cursor-pointer p-6 bg-gradient-to-r text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-white bg-opacity-5 rounded-full"></div>
              </div>

              {/* Subcategories */}
              <div className={`transition-all duration-300 overflow-hidden ${
                expandedCategory === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-2">
                    {category.subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.id}/${subcategory.toLowerCase().replace(' ', '-')}`}
                        className="text-sm text-gray-700 hover:text-primary-600 hover:bg-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                        <span>{subcategory}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* View All Link */}
              <div className="p-4 border-t border-gray-100">
                <Link
                  to={`/category/${category.id}`}
                  className="w-full inline-flex justify-center items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-200 group-hover:bg-primary-700"
                >
                  Ver Todas las Ofertas
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos y te ayudamos a encontrar las mejores promociones personalizadas para ti.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contactar Ahora
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;