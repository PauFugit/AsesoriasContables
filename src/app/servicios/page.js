
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import Image from 'next/image';
import Asesorias from '@/components/Asesorias';
import BannerCierre from '@/components/BannerCierre';
import BannerEstatico from '@/components/BannerEstatico';



export default function Home() {
  return (
    <div className="font-grotesk">

      <NavBar />
      <div style={{ paddingTop: '8rem' }}></div>
      <Banner />

      <section>
        <Asesorias />
      </section>

      <section>
        <div className='font-grotesk p-20 text-custom-blue'>
          <h1 className='text-6xl text-bold' style={{ letterSpacing: "0.3rem" }}>CONDICIONES GENERALES</h1>

          <ul className='py-10 px-20'>
            <li>
              <div className=' flex items-center space-x-4'>
                <Image
                  src="/assets/icononuestrosservicios.png"
                  width={100}
                  height={100}
                  alt="Ícono nuestros servicios"
                />
                <p className='text-2xl font-alternative'>CUERPO DE TEXTO LOREM IPSUM, Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              </div>
            </li>


            <li>
              <div className='flex items-center space-x-4'>
                <Image
                  src="/icons/iconocotiza.png"
                  width={100}
                  height={100}
                  alt="Ícono Cotiza"
                />
                <p className='text-2xl font-alternative'>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              </div>
            </li>
            <li>
              <div className='flex items-center space-x-4'>
                <Image
                  src="/assets/iconoblog.png"
                  width={100}
                  height={100}
                  alt="Ícono Blog"
                />
                <p className='text-2xl font-alternative'>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.</p>
              </div></li>
            <li>
              <div className='flex items-center space-x-4'>
                <Image
                  src="/assets/iconoasesorias.png"
                  width={100}
                  height={100}
                  alt="Ícono Asesorías"
                />
                <p className='text-2xl font-alternative'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='bg-center' style={{ backgroundImage: "url('/assets/bannerextrados.jpg')", backgroundSize: "cover" }}>
        <BannerEstatico />
      </section>

      <Footer />
    </div>

  );
}