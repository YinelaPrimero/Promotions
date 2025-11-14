const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Valoramos tu privacidad y la protección de tu información
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-gray-600 leading-relaxed mb-8">
              Valoramos tu privacidad. Esta política explica cómo tratamos la información que puedas compartir al navegar por nuestro portafolio de herramientas y servicios digitales.
            </p>

            <div className="space-y-8">
              {/* Sección 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">1</span>
                  Información recopilada
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  No solicitamos datos personales sensibles. Podemos recopilar información anónima sobre tu navegación (como páginas visitadas) para mejorar la experiencia del sitio.
                </p>
              </div>

              {/* Sección 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">2</span>
                  Uso de la información
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  La información anónima se utiliza únicamente para análisis estadístico y optimización del sitio. No compartimos datos con terceros ni enviamos publicidad personalizada.
                </p>
              </div>

              {/* Sección 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">3</span>
                  Seguridad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Implementamos medidas técnicas para proteger la integridad del sitio y evitar accesos no autorizados. Sin embargo, recuerda que ningún sistema es 100% seguro.
                </p>
              </div>

              {/* Sección 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">4</span>
                  Cambios en la política
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página y, cuando corresponda, te notificaremos por otros medios.
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Tienes preguntas?</h3>
                <p className="text-gray-700">
                  Si tienes alguna pregunta sobre nuestra política de privacidad, no dudes en contactarnos a través de nuestro formulario de contacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
