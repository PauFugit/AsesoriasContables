'use client'
import Card from '../components/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      imageSrc: '/assets/cardasesoriascontables.png',
      title: 'Asesorías Contables',
      description: '100% bailables',
    },
    {
      imageSrc: '/assets/cardasesorialaboral.png',
      title: 'Asesorías Laborales',
      description: '100% bailables',
    },
    {
      imageSrc: '/assets/cardasesoriatributaria.png',
      title: 'Asesorías Tributarias',
      description: '100% bailables',
    },
    {
      imageSrc: '/assets/cardauditoria.png',
      title: 'Auditorías',
      description: '100% bailables',
    },
  ];

  return (
    <div className="p-4 text-custom-blue">
      <div className="flex items-center justify-between mt-10 p-4">
        <div className="flex-shrink-0">
          <Image 
            src="/icons/icononuestrosservicios.png" 
            alt="Icono de servicios" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="flex flex-col text-right ml-4">
          <h2 className="xl:text-8xl text-6xl font-alternative" style={{ letterSpacing: "0.1rem" }}>
            NUESTROS SERVICIOS
          </h2>
          <p className="mt-4 text-2xl">
            Estos son todos los servicios que<br /> tenemos disponibles para ti
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {services.map((service, index) => (
          <Card
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-5 space-y-10">
          <Link href="/contactanos">
            <p 
              className="inline-block mt-10 ml-8 text-3xl bg-custom-green py-2 px-3 rounded-full shadow-lg hover:bg-custom-blue hover:text-custom-white transition duration-300 cursor-pointer"
              style={{ letterSpacing: "0.1rem" }}
            >
              Cotiza aquí
            </p>
          </Link>
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/flechaazulizquierda.png"
              alt="Flecha azul izquierda"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}