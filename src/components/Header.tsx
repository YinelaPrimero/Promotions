import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories: Category[] = [
    {
      id: 'home',
      name: 'HOME',
      subcategories: ['Decoración', 'Muebles', 'Electrodomésticos', 'Jardín', 'Limpieza', 'Organización']
    },
    {
      id: 'business',
      name: 'BUSINESS',
      subcategories: ['Marketing', 'Finanzas', 'Recursos Humanos', 'Oficina', 'Seguros', 'Consultoría']
    },
    {
      id: 'tools-software',
      name: 'TOOLS & SOFTWARE',
      subcategories: ['Desarrollo', 'Diseño', 'Productividad', 'Seguridad', 'Antivirus', 'Utilidades']
    },
    {
      id: 'life-style',
      name: 'LIFE & STYLE',
      subcategories: ['Salud', 'Belleza', 'Fitness', 'Bienestar', 'Mindfulness', 'Autoayuda']
    },
    {
      id: 'fashion',
      name: 'FASHION',
      subcategories: ['Ropa Mujer', 'Ropa Hombre', 'Zapatos', 'Accesorios', 'Bolsos', 'Joyería']
    },
    {
      id: 'entertainment',
      name: 'ENTERTAINMENT',
      subcategories: ['Gaming', 'Streaming', 'Música', 'Libros', 'Películas', 'Eventos']
    },
    {
      id: 'travel',
      name: 'TRAVEL',
      subcategories: ['Hoteles', 'Vuelos', 'Alquiler de Coches', 'Tours', 'Seguros de Viaje', 'Experiencias']
    },
    {
      id: 'about-us',
      name: 'ABOUT US',
      subcategories: ['Nuestra Historia', 'El Equipo', 'Misión', 'Valores', 'Testimonios', 'Prensa']
    }
  ];

  return (
    <header className="bg-white shadow-lg relative">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">🎉 ¡Nuevas promociones cada día!</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>📧 info@promociones.com</span>
              <span className="hidden sm:inline">📞 +1 234-567-8900</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FLEXBEGIN</h1>
                <p className="text-sm text-gray-600">Your Journey Starts Here</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(category.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                >
                  {category.name}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div className={`absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 z-50 ${
                  openDropdown === category.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                    <h3 className="font-bold text-sm">{category.name}</h3>
                  </div>
                  <div className="p-2 max-h-96 overflow-y-auto">
                    {category.subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.id}/${subcategory.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-100">
                    <Link
                      to={`/category/${category.id}`}
                      className="block px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md text-center"
                    >
                      Ver Todas →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            {categories.map((category) => (
              <div key={category.id} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
                  className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-semibold"
                >
                  {category.name}
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === category.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === category.id && (
                  <div className="pl-4 pb-2 space-y-1">
                    {category.subcategories.map((subcategory, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.id}/${subcategory.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subcategory}
                      </Link>
                    ))}
                    <Link
                      to={`/category/${category.id}`}
                      className="block px-3 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Ver Todas →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;