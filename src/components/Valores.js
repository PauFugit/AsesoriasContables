import Image from "next/image";


const values = [
    {
      title: 'HONESTIDAD',
      image: '/icons/iconohonestidad.png', // Actualiza con la ruta correcta
    },
    {
      title: 'RESPONSABILIDAD',
      image: '/icons/iconoresponsabilidad.png', // Actualiza con la ruta correcta
    },
    {
      title: 'RESPETO',
      image: '/icons/iconorespeto.png', // Actualiza con la ruta correcta
      additionalText: 'Por nuestros/as clientes y nuestro trabajo',
    },
  ]
  
  const Valores = () => {
    return (
      <div className="py-12" style={{backgroundImage: "url('/fondos/fondosvalores.png')"}}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-left mb-12">NUESTROS VALORES</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            {values.map((value, index) => (
              <div key={index} className="relative flex flex-col items-center mb-8 md:mb-0 md:px-4">
                <div className="w-32 h-32 rounded-full flex items-center justify-center relative mb-4">
                  <Image src={value.image} alt={value.title} className="object-fit" 
                  height={5000}
                  width={5000}
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Valores;
  