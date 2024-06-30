'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const slides = [
  {
    src: '/assets/bannerBg.jpg', // Actualiza con la ruta de tu primera imagen
    text: ["ASESÓRATE,", "FÓRMATE,", "CRECE."],
    description: ["Maximiza tu eficiencia y rentabilidad", "con nuestra asesoría contable y tributaria potenciada por estrategias digitales."],
    buttonText: "Contáctanos",
    href:"/contactanos",
  },
  {
    src: '/assets/bannerextra.jpg', // Actualiza con la ruta de tu segunda imagen
    text: ["INNOVA,", "APRENDE,", "TRIUNFA."],
    description: ["Transformamos tus datos en decisiones rentables", "con nuestra expertise en marketing digital y asesoría contable."],
    buttonText: "Saber más",
    href: "/servicios",
  },
  {
    src: '/assets/bannerBg_3.jpg', // Actualiza con la ruta de tu tercera imagen
    text: ["DESCUBRE,", "ANALIZA,", "CRECE."],
    description: ["Desata el potencial de tu negocio", "con nuestro enfoque digital en asesoría contable y tributaria."],
    buttonText: "Cotiza Ahora",
    href: "/cotiza",
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
          <Image src={slide.src} alt={`Slide Image ${index + 1}`} fill objectFit="cover" className="w-full h-full" ></Image>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-start text-left p-8 md:p-16 lg:p-24 xl:p-32">
            <div className="mb-4">
              {slide.text.map((word, i) => (
                <h1 key={i} className={`text-4xl md:text-5xl lg:text-8xl mb-4 ${i === 1 ? 'text-custom-green' : 'text-white'}`}>{word}</h1>
              ))}
            </div>
            <div className="flex flex-col space-y-1">
              {Array.isArray(slide.description) ? (
                slide.description.map((desc, i) => (
                  <p key={i} className="text-xl md:text-3xl text-white">{desc}</p>
                ))
              ) : (
                <p className="text-lg md:text-xl text-white">{slide.description}</p>
              )}
              <div className="flex items-center space-x-4 pt-10">
                <Image src="/icons/flechaverdederecha.png" className='hidden sm:block' width={60} height={60} alt="icon" ></Image>
                <Image src="/icons/flechaverdederecha.png" className='block sm:hidden' width={40} height={40} alt="icon" ></Image>
                <Link href="/contactanos"
                  className="bg-custom-green text-custom-blue py-1 px-8 text-l md:text-xl lg:text-3xl rounded-full hover:bg-custom-white"
                  >  {slide.buttonText}
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="hidden absolute left-0 top-1/2 transform -translate-y-1/2 px-4">
        <Image src="/icons/flechaverdeizquierda.png" width={50} height={50} alt="Prev" ></Image>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4">
        <Image src="/icons/flechaverdederecha.png" className="hidden sm:block" width={150} height={150} alt="Next" ></Image>
        <Image src="/icons/flechaverdederecha.png" className='block sm:hidden' width={80} height={80} alt="Next" ></Image>
      </button>
    </div>
  )
}
export default Carrousel;