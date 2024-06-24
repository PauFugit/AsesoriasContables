
import BannerCierre from '@/components/BannerCierre';
import Footer from '@/components/Footer';
import Formulario from '@/components/Formulario';
import FormularioCotiza from '@/components/FormularioCotiza';
import NavBar from '@/components/NavBar';
import Image from 'next/image';



export default function Home() {
    return (
        <div className="font-grotesk">
            <NavBar />
            <div>
                <section >
                <div className="relative text-white">
      <Image
        src="/fondos/bannerescribennos.png"
        alt="Banner Background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 pt-40 md:pt-80 lg:pt-96">
        <div className='px-6 md:px-10 py-10 bg-custom-blue bg-opacity-50'>
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-custom-green" >¿INTERESADO EN NUESTROS SERVICIOS?</h1>
          <div className='flex items-center space-x-4'>
            <h2 className="text-xl md:text-4xl lg:text-6xl py-4 px-2 md:px-4 text-custom-white" style={{ letterSpacing: "0.5rem" }}><i>ESCRÍBENOS</i></h2>
            <Image
              src="/icons/iconoescribenos.png"
              alt="Icono escríbennos"
              width={50}
              height={50}
              className="md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
        </div>
      </div>
    </div>
                </section>
                <div className="bg-custom-green text-white text-center py-2"> </div>
                <section style={{ backgroundImage: "url('/fondos/fondovalores.png')", backgroundSize: "cover" }}>
                    
                <h4 className="text-xl sm:text-m mb-4 py-4 px-4 text-left"><i>Para continuar completa el siguiente formulario:</i></h4>

                    <FormularioCotiza />
                </section>
            </div>
            <div className="bg-custom-green text-white text-center py-2"> </div>
            <section className='bg-center' style={{ backgroundImage: "url('/assets/Bannerextra.jpg')", backgroundSize: "cover" }}>
                <BannerCierre />
            </section>
            <div className="bg-custom-green text-white text-center py-2"> </div>
            <Footer />
        </div>

    );
}