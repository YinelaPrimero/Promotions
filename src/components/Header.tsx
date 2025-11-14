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
      name: 'INICIO',
      subcategories: []
    },
    {
      id: 'diseno-y-creatividad',
      name: 'DISEÑO',
      subcategories: []
    },
    {
      id: 'marketing-y-seo',
      name: 'MARKETING',
      subcategories: []
    },
    {
      id: 'hosting-y-web',
      name: 'HOSTING',
      subcategories: []
    },
    {
      id: 'productividad-y-ia',
      name: 'PRODUCTIVIDAD',
      subcategories: []
    },
    {
      id: 'finanzas-y-contabilidad',
      name: 'FINANZAS',
      subcategories: []
    },
    {
      id: 'e-commerce',
      name: 'E-COMMERCE',
      subcategories: []
    },
    {
      id: 'seguridad-y-privacidad',
      name: 'SEGURIDAD',
      subcategories: []
    },
    {
      id: 'multimedia',
      name: 'MULTIMEDIA',
      subcategories: []
    }
    // Categorías comentadas para implementación futura
    // {
    //   id: 'business',
    //   name: 'NEGOCIOS',
    //   subcategories: ['Marketing', 'Finanzas', 'Recursos Humanos', 'Oficina', 'Seguros', 'Consultoría']
    // },
    // {
    //   id: 'life-style',
    //   name: 'VIDA Y ESTILO',
    //   subcategories: ['Salud', 'Belleza', 'Fitness', 'Bienestar', 'Mindfulness', 'Autoayuda']
    // },
    // {
    //   id: 'fashion',
    //   name: 'MODA',
    //   subcategories: ['Ropa Mujer', 'Ropa Hombre', 'Zapatos', 'Accesorios', 'Bolsos', 'Joyería']
    // },
    // {
    //   id: 'entertainment',
    //   name: 'ENTRETENIMIENTO',
    //   subcategories: ['Gaming', 'Streaming', 'Música', 'Libros', 'Películas', 'Eventos']
    // },
    // {
    //   id: 'travel',
    //   name: 'VIAJES',
    //   subcategories: ['Hoteles', 'Vuelos', 'Alquiler de Coches', 'Tours', 'Seguros de Viaje', 'Experiencias']
    // },
    // {
    //   id: 'about-us',
    //   name: 'ACERCA DE',
    //   subcategories: ['Nuestra Historia', 'El Equipo', 'Misión', 'Valores', 'Testimonios', 'Prensa']
    // }
  ];

  return (
    <header className="bg-white shadow-lg relative">
      {/* Top bar with Logo */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo en la barra superior */}
            <Link to="https://digitalscreationtools.com" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Digital Creation Tools</h1>
                <p className="text-xs text-primary-100">Encuentra información de blogs y herramientas</p>
              </div>
            </Link>

            {/* Contact info 
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Encuentra información de blogs y herramientas
              </span>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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

            {/* Desktop Navigation - Left aligned */}
            <nav className="hidden lg:flex items-center space-x-10 flex-1">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="relative group"
                  onMouseEnter={() => category.subcategories.length > 0 ? setOpenDropdown(category.id) : null}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={category.id === 'home' ? '/' : `/category/${category.id}`}
                    className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                  >
                    {category.name}
                    {category.subcategories.length > 0 && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown - solo se muestra si hay subcategorías */}
                  {category.subcategories.length > 0 && (
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
                          to={category.id === 'home' ? '/' : `/category/${category.id}`}
                          className="block px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md text-center"
                        >
                          Ver Todas →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Spacer for mobile button alignment */}
            <div className="lg:hidden w-6"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            {categories.map((category) => (
              <div key={category.id} className="border-b border-gray-100 last:border-0">
                {category.subcategories.length === 0 ? (
                  <Link
                    to={category.id === 'home' ? '/' : `/category/${category.id}`}
                    className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ) : (
                  <>
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
                  </>
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