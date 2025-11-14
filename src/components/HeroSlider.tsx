import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Descubre las Mejores Herramientas Creativas',
      description: 'Explora Adobe Creative Cloud, Photoshop, Illustrator y más herramientas profesionales para llevar tus proyectos al siguiente nivel',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=600&fit=crop',
      buttonText: 'Ver Herramientas Creativas',
      buttonLink: '/category/diseno-y-creatividad'
    },
    {
      id: 2,
      title: 'Impulsa tu Negocio con las Mejores Herramientas',
      description: 'Encuentra soluciones de hosting, marketing, e-commerce y productividad para hacer crecer tu empresa',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      buttonText: 'Explorar Soluciones',
      buttonLink: '/category/productividad-y-ia'
    },
    {
      id: 3,
      title: 'Software de Finanzas y Contabilidad',
      description: 'Automatiza tu contabilidad, gestiona pagos y optimiza las finanzas de tu negocio con las mejores herramientas',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop',
      buttonText: 'Ver Herramientas Financieras',
      buttonLink: '/category/finanzas-y-contabilidad'
    },
    {
      id: 4,
      title: 'Seguridad y Productividad',
      description: 'Protege tu información y aumenta tu productividad con herramientas de seguridad, gestión y colaboración',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop',
      buttonText: 'Descubre Más',
      buttonLink: '/category/seguridad-y-privacidad'
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fadeIn">
                {slide.description}
              </p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 animate-fadeIn"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
