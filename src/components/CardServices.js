'use client'
import Card from '../components/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      imageSrc: '/cards/cardpageserviciouno.jpg',
      title: 'Asesoría Contable',
      description: '100% bailables',
    },
    {
      imageSrc: '/cards/cardpageserviciodos.jpg',
      title: 'Asesoría Laboral',
      description: '100% bailables',
    },
    {
      imageSrc: '/cards/cardpageserviciotres.jpg',
      title: 'Asesoría Tributaria',
      description: '100% bailables',
    },
    {
      imageSrc: '/cards/cardpageserviciocuatro.jpg',
      title: 'Auditoría',
      description: '100% bailables',
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between p-4">
      <div className="flex-shrink-0">
        <Image src="/icons/icononuestrosservicios.png" 
        alt="Icono de servicios" width={150} height={150} />
      </div>
      <div className="flex flex-col text-right ml-4">
        <h2 className="text-5xl font-bold">NUESTROS SERVICIOS</h2>
        <p className="mt-4">Estos son todos los servicios que<br></br> tenemos disponibles para ti</p>
      </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-5 space-y-10'>
      <Link href="/contactanos">
        <p className="inline-block mt-10 ml-8 bg-green-500 text-white py-2 px-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer">
          Cotiza aquí
        </p>
      </Link>
      <div className='flex items-center space-x-4'>
      <Image
      src="/icons/flechaazulizquierda.png"
      width={80}
      height={80}
      />
    </div>
    </div>
    </div>
    </div>
  );
}