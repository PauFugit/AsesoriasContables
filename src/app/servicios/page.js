
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
      <div style={{ paddingTop: '7rem' }}></div>
      <Banner />

      <section style={{ backgroundImage: "url('/fondos/fondodegradado.png')", backgroundSize: "cover" }}>
        <Asesorias />
      </section>

      <div className="bg-custom-green text-white text-center py-1"> </div>
      <section className='bg-center' style={{ backgroundImage: "url('/assets/bannerextrados.jpg')", backgroundSize: "cover" }}>
        <BannerEstatico />
      </section>
      <div className="bg-custom-green text-white text-center py-1"> </div>
      <Footer />
    </div>

  );
}