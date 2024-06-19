import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative text-white">
      <Image
        src="/assets/BannerServiciosPage.jpg"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative z-10 p-16 font-grotesk">
        <h1 className="text-8xl text-bold text-custom-green py-20" style={{letterSpacing:"0.5rem"}}>NUESTROS SERVICIOS</h1>
        <p className="text-5xl mt-1 py-1">¿Buscas empezar tu emprendimiento?</p>
        <p className="text-5xl text-bold mt-1 bg-transparent inline-block px-4 py-2 rounded-lg border-4 border-custom-green">
          estás en el lugar indicado
        </p>
        <p className="mt-20 text-2xl leading-relaxed">
        En <b>Asesorías Valdivia</b> ofrecemos servicios integrales de asesoría contable, laboral, tributaria y auditoría, <br></br>
        diseñados para optimizar la gestión y el cumplimiento normativo de tu negocio. <br></br>
        Nuestra experiencia garantiza soluciones personalizadas que mejoran la eficiencia, previenen problemas <br></br>
        y proporcionan información clave para la toma de decisiones estratégicas, asegurando así el crecimiento sostenible y la credibilidad de tu empresa
        </p>
        <div className=" text-right font-grotesk">
          <p className="text-2xl text-bold text-custom-green">Contáctanos a:</p>
          <p className="text-2xl text-bold">contacto@asesoriasvaldivia.cl</p>
          <p className="text-2xl text-bold">o escríbenos al +56978505042</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
