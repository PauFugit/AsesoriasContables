'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    src: '/assets/bannerBg.jpg', // Actualiza con la ruta de tu primera imagen
    text: "ASESÓRATE, FÓRMATE, CRECE.",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    buttonText: "Contáctanos",
  },
  {
    src: '/assets/bannerextra.jpg', // Actualiza con la ruta de tu segunda imagen
    text: "INNOVA, APRENDE, TRIUNFA.",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    buttonText: "Más Información",
  },
  {
    src: '/assets/bannerBg_3.jpg', // Actualiza con la ruta de tu tercera imagen
    text: "DESCUBRE, ANALIZA, CRECE.",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    buttonText: "Únete Ahora",
  }
]

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={slide.src} alt={`Slide Image ${index + 1}`} layout="fill" objectFit="cover" className="w-full h-full" />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slide.text}</h1>
            <p className="text-white mb-8">{slide.description}</p>
            
            <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />

            <button className="bg-green-400 text-white py-2 px-6 rounded-full hover:bg-green-500">{slide.buttonText}</button>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4">‹</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4">›</button>
    </div>
  )
}

export default Carrousel;