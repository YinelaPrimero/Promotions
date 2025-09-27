const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre PromoHub</h1>
          <p className="text-xl text-gray-600">
            Tu destino confiable para las mejores promociones del mercado.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 leading-relaxed">
            En PromoHub, nos dedicamos a conectar a las personas con las mejores ofertas y promociones 
            disponibles en el mercado. Creemos que todos merecen acceso a productos y servicios de 
            calidad a precios justos.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Ofrecemos?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Promociones Verificadas</h3>
              <p className="text-gray-600">
                Todas nuestras ofertas son verificadas y actualizadas regularmente para 
                garantizar su validez.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Amplia Cobertura</h3>
              <p className="text-gray-600">
                Cubrimos múltiples categorías desde tecnología hasta moda, hogar y viajes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Fácil Navegación</h3>
              <p className="text-gray-600">
                Nuestra plataforma está diseñada para que encuentres rápidamente lo que buscas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Actualizaciones Constantes</h3>
              <p className="text-gray-600">
                Agregamos nuevas promociones diariamente para mantenerte al día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;