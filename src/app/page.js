import BannerCierre from '@/components/BannerCierre';
import BlogSection from '@/components/BlogSection';
import CardServices from '@/components/CardServices';
import Carrousel from '@/components/Carrousel';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NuestrosClientes from '@/components/NuestrosClientes';
import Image from 'next/image';



export default function Home() {
  return (
    <div>
      <main>
      
            <NavBar />
            </main>
            
            <Carrousel />

      <div style={{backgroundImage: "url('/fondos/Fondo.png')"}}>
      <section>
        <CardServices />
      </section>
      <section>
        <BlogSection/>
      </section>

      <div>
        <NuestrosClientes />
      </div>
      </div>
      <div className="w-full" >
        <div className="w-full bg-center text-white" style={{ backgroundImage: "url('/assets/bannerCierre.jpg')" }}>
          <BannerCierre />
        </div>
      </div>

      <Footer />
    </div>
   

  );
}