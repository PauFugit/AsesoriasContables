'use client'

import Clientes from '../components/Clientes';

export default function NuestrosClientes() {
  const clientLogos = [
    { src: '/images/client1.png', alt: 'Client 1' },
    { src: '/images/client2.png', alt: 'Client 2' },
    { src: '/images/client3.png', alt: 'Client 3' },
    { src: '/images/client4.png', alt: 'Client 4' },
    { src: '/images/client5.png', alt: 'Client 5' },
    { src: '/images/client6.png', alt: 'Client 6' },
    { src: '/images/client7.png', alt: 'Client 7' },
    { src: '/images/client8.png', alt: 'Client 8' },
    { src: '/images/client9.png', alt: 'Client 9' },
    { src: '/images/client10.png', alt: 'Client 10' },
    { src: '/images/client11.png', alt: 'Client 11' },
    { src: '/images/client12.png', alt: 'Client 12' },
    { src: '/images/client13.png', alt: 'Client 13' },
    { src: '/images/client14.png', alt: 'Client 14' },
    { src: '/images/client15.png', alt: 'Client 15' },
    { src: '/images/client16.png', alt: 'Client 16' },
    { src: '/images/client17.png', alt: 'Client 17' },
    { src: '/images/client18.png', alt: 'Client 18' },
    { src: '/images/client19.png', alt: 'Client 19' },
    { src: '/images/client20.png', alt: 'Client 20' },
    { src: '/images/client21.png', alt: 'Client 21' },
    { src: '/images/client22.png', alt: 'Client 22' },
    { src: '/images/client23.png', alt: 'Client 23' },
    { src: '/images/client24.png', alt: 'Client 24' },
    { src: '/images/client25.png', alt: 'Client 25' },
    { src: '/images/client26.png', alt: 'Client 26' },
    { src: '/images/client27.png', alt: 'Client 27' },
    { src: '/images/client28.png', alt: 'Client 28' },
  ];

  return (
    <div className="min-h-screen py-2">
      {/* Otros componentes y secciones de tu página */}
      <Clientes images={clientLogos} />
    </div>
  );
}