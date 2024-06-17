import Image from 'next/image'

const teamMembers = [
  {
    name: 'RICARDO VALDIVIA SALIS',
    role: 'CEO',
    image: '/cards/fotoorco.png', // Actualiza con la ruta correcta
  },
  {
    name: 'GABRIELA OYANADEL DUBOST',
    role: 'Encargada RRHH',
    image: '/cards/fotoorco.png', // Actualiza con la ruta correcta
  },
  {
    name: 'HÉCTOR VALDIVIA RAMOS',
    role: 'Asistente Contable',
    image: '/cards/fotoorco.png', // Actualiza con la ruta correcta
  },
  {
    name: 'ARIEL VILLAMÁN SÁNCHEZ',
    role: 'Auditor Senior',
    image: '/cards/fotoorco.png', // Actualiza con la ruta correcta
  },
]

const AboutUs = () => {
  return (
    <div className=" py-12 bg-center" style={{backgroundImage: "url('/fondos/fondoaboutus.png')"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4  rounded-lg shadow-md">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="w-full" />
              </div>
              <h3 className="text-l font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">QUIÉNES SOMOS</h2>
            <p className="text-gray-700">Asesorías Valdivia SPA nace en pandemia. Luego de la aparición de COVID-19, Valdivia S.A., Consultora Auditora en el Régimen General, también nos destacamos en el Régimen Simplificado. Queremos hacer más fácil el cumplimiento tributario de nuestros clientes y brindarles las mejores herramientas para crecer con eficiencia en nuestros servicios.</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">NUESTROS SERVICIOS</h2>
            <p className="text-gray-700">Contamos con servicios de asesorías laborales, contables y tributaria, además de servicios de auditoría.</p>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">HISTORIA</h2>
            <p className="text-gray-700">Asesorías Valdivia SPA nace en pandemia. Luego de la aparición de COVID-19, Valdivia S.A., Consultora Auditora en el Régimen General, también nos destacamos en el Régimen Simplificado. Queremos hacer más fácil el cumplimiento tributario de nuestros clientes y brindarles las mejores herramientas para crecer con eficiencia en nuestros servicios.</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">NUESTROS CLIENTES</h2>
            <p className="text-gray-700">Tenemos una basta variedad de clientes, desde Restaurantes, Empresas de Ingeniería, Empresas de Marketing, Empresas de Transportes, Empresas Marítimas, entre otros. esto a llevado a tener una basta experiencia en distintos tipos de contabilidades y basta experiencia en todos los rubros.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;