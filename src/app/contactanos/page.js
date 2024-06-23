
import BannerCierre from '@/components/BannerCierre';
import Footer from '@/components/Footer';
import Formulario from '@/components/Formulario';
import FormularioContacto from '@/components/FormularioContacto';
import NavBar from '@/components/NavBar';
import Image from 'next/image';



export default function Home() {
  return (
    <div className="font-grotesk">
      <NavBar />
      <div>
        <section>

          <div className="relative text-white">
            <Image
              src="/fondos/bannerescribennos.png"
              alt="Banner Background"
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="relative z-10" style={{ paddingTop: "20rem" }}>
              <div className='px-20 py-20'>
                <h1 className="text-7xl text-custom-green" style={{ letterSpacing: "0.5rem" }}>¿TIENES DUDAS?</h1>
                <div className='flex items-center space-x-4'>
                  <h2 className="text-6xl py-4 px-4 text-custom-white" style={{ letterSpacing: "0.5rem" }}><i>ESCRÍBENOS</i></h2>
                  <Image
                    src="/icons/iconoescribenos.png"
                    alt="Icono escríbennos"
                    width={100}
                    height={100}
                  />

                </div>
              </div>
            </div>
          </div>

        </section>
        <section style={{ backgroundImage: "url('/fondos/fondovalores.png')", backgroundSize: "cover" }}>
          <Formulario />
        </section>
      </div>

      <section className='bg-center' style={{ backgroundImage: "url('/assets/Bannerextra.jpg')", backgroundSize: "cover" }}>
        <BannerCierre />
      </section>

      <Footer />
    </div>

  );
}