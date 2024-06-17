const values = [
    {
      title: 'HONESTIDAD',
      icon: '/icon-honestidad.png', // Actualiza con la ruta correcta
    },
    {
      title: 'RESPONSABILIDAD',
      icon: '/icon-responsabilidad.png', // Actualiza con la ruta correcta
    },
    {
      title: 'RESPETO',
      icon: '/icon-respeto.png', // Actualiza con la ruta correcta
      additionalText: 'Por nuestros/as clientes y nuestro trabajo',
    },
  ]
  
  const Valores = () => {
    return (
      <div className="bg-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">NUESTROS VALORES</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {values.map((value, index) => (
              <div key={index} className="relative flex flex-col items-center mb-8 md:mb-0 md:px-4">
                <div className="w-32 h-32 bg-blue-700 rounded-full flex items-center justify-center relative mb-4">
                  <img src={value.icon} alt={value.title} className="w-16 h-16" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-700">{value.title}</h3>
                  {value.additionalText && (
                    <p className="text-sm text-gray-700 mt-2">{value.additionalText}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Valores;
  