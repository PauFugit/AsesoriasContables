
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import Image from 'next/image';
import Asesorias from '@/components/Asesorias';



export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full bg-banner-bg bg-center">
          <div className="w-full bg-black opacity-80 text-white">
            <NavBar />
            <Banner />
          </div>
        </div>
      </main>

      <section>
        <Asesorias/>
      </section>

      <section>
        <h1 className='text-xl'>Condiciones generales</h1>
        <ul>
          <li>
            <Image
              src="/assets/icononuestrosservicios.png"
              width={70}
              height={70}
            />
            <p>CUERPO DE TEXTO LOREM IPSUM, Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p></li>
          <li>
            <Image
              src="/assets/iconoescribenos.png"
              width={70}
              height={70}
            />
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo</p></li>
          <li>
            <Image
              src="/assets/iconoblog.png"
              width={70}
              height={70}
            />
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.</p></li>
          <li>
            <Image
              src="/assets/iconoasesorias.png"
              width={70}
              height={70}
            />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo</p></li>
        </ul>
      </section>


      <Footer />
    </div>

  );
}