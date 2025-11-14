const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Términos de Uso
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Conoce las condiciones de uso de nuestro sitio
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <p className="text-gray-600 leading-relaxed mb-8">
              Bienvenido. Al utilizar nuestro sitio, aceptas estos términos diseñados para proteger tu experiencia y la de la comunidad. Este sitio es un portafolio/demo independiente de herramientas y servicios digitales, no una tienda oficial.
            </p>

            <div className="space-y-8">
              {/* Sección 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">1</span>
                  Uso del sitio
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Puedes explorar información, descripciones y recursos sobre herramientas y servicios digitales. No está permitido el reventa comercial, la copia masiva de contenido ni la suplantación de identidad. El acceso es libre para fines educativos y de inspiración.
                </p>
              </div>

              {/* Sección 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">2</span>
                  Propiedad intelectual
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Las marcas, logotipos y nombres de productos mostrados pertenecen a sus respectivos propietarios. El contenido se utiliza con fines demostrativos y educativos, sin intención de infringir derechos de autor.
                </p>
              </div>

              {/* Sección 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">3</span>
                  Cambios en los términos
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Podemos actualizar estos términos para reflejar mejoras en la experiencia o cambios legales. Te notificaremos en el sitio sobre cualquier modificación relevante.
                </p>
              </div>

              {/* Sección 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-lg mr-3 font-bold">4</span>
                  Contacto
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ¿Tienes dudas sobre estos términos? Contáctanos mediante el formulario de contacto o redes sociales indicadas en el sitio.
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aceptación de términos</h3>
                <p className="text-gray-700">
                  Al continuar navegando y utilizando este sitio, confirmas que has leído, entendido y aceptado estos términos de uso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
