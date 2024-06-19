
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
                <section className="relative text-white">
                    <div className="relative">
                        <Image
                            src="/assets/BannerContactanos.png"
                            alt="Banner Background"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-20 py-20" style={{ paddingTop: "20rem" }}>
                            <h1 className="text-4xl md:text-7xl text-custom-green" style={{ letterSpacing: "0.2rem", md: { letterSpacing: "0.5rem" } }}>¿INTERESADO EN NUESTROS SERVICIOS?</h1>
                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
                                <h2 className="text-2xl md:text-6xl py-2 md:py-4 px-2 md:px-4 text-custom-white" style={{ letterSpacing: "0.1rem", md: { letterSpacing: "0.2rem" } }}>COTIZA AQUÍ</h2>
                                <Image
                                    src="/icons/iconoescribenos.png"
                                    alt="Icono escríbennos"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ backgroundImage: "url('/fondos/fondovalores.png')", backgroundSize: "cover" }}>
                    <FormularioCotiza />
                </section>
            </div>

            <section className='bg-center' style={{ backgroundImage: "url('/assets/Bannerextra.jpg')", backgroundSize: "cover" }}>
                <BannerCierre />
            </section>

            <Footer />
        </div>

    );
}