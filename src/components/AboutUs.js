import Image from 'next/image'

const teamMembers = [
  {
    name: 'VICTOR HUGO TAMARUGO',
    role: 'Consultor',
    image: '/victor.png', // Actualiza con la ruta correcta
  },
  {
    name: 'ANITA LA HUEFANITA',
    role: 'Consultora',
    image: '/anita.png', // Actualiza con la ruta correcta
  },
  {
    name: 'DON JUAN EL CARNICERO',
    role: 'Consultor',
    image: '/juan.png', // Actualiza con la ruta correcta
  },
  {
    name: 'NOSECUAN TITO',
    role: 'Consultor',
    image: '/tito.png', // Actualiza con la ruta correcta
  },
]

const AboutUs = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">QUIÉNES SOMOS</h2>
            <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">NUESTROS SERVICIOS</h2>
            <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">HISTORIA</h2>
            <p className="text-gray-700">Asesorías Valdivia SPA nace en pandemia. Luego de la aparición de COVID-19, Valdivia S.A., Consultora Auditora en el Régimen General, también nos destacamos en el Régimen Simplificado. Queremos hacer más fácil el cumplimiento tributario de nuestros clientes y brindarles las mejores herramientas para crecer con eficiencia en nuestros servicios.</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">METODOLOGÍA DE TRABAJO</h2>
            <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;