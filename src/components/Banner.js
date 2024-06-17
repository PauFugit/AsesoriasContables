import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative bg-blue-100 text-white">
      <Image
        src="/assets/BannerServiciosPage.jpg"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
      <div className="relative z-10 p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold text-green-300">NUESTROS SERVICIOS</h1>
        <p className="text-2xl md:text-4xl mt-4">¿Buscas empezar tu emprendimiento?</p>
        <p className="text-xl md:text-3xl mt-2 bg-blue-500 inline-block px-4 py-2 rounded-md">
          estás en el lugar indicado
        </p>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Eaue ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Eaue ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <div className="mt-8 text-right">
          <p className="text-lg">Contáctanos a:</p>
          <p className="text-lg">info@asesoriasvaldivia.cl</p>
          <p className="text-lg">o escríbenos al +56966666666</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
