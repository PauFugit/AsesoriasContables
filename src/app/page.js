import BannerCierre from '@/components/BannerCierre';
import BannerEstatico from '@/components/BannerEstatico';
import BlogSection from '@/components/BlogSection';
import CardServices from '@/components/CardServices';
import Carrousel from '@/components/Carrousel';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NuestrosClientes from '@/components/NuestrosClientes';
import WhatsAppButton from '@/components/WhatsappButton';




export default function Home() {
  return (
    <div className="font-grotesk">
      <main>
        <NavBar />
      </main>
      <div style={{ paddingTop: '7rem' }}></div>
      <Carrousel />

      <div style={{ backgroundImage: "url('/fondos/fondodegradado.png')", backgroundSize: "cover" }}>
        <section>
          <CardServices />
        </section>
        <section>
          <BlogSection />
        </section>

        <div className='py-8'>

          <h2 className="text-6xl md:text-8xl pl-4 font-alternative text-left my-10 py-10  text-custom-blue" style={{ letterSpacing: "0.1rem" }}>NUESTROS CLIENTES</h2>
          <NuestrosClientes />
        </div>

      </div>

      <div className="bg-center" style={{ backgroundImage: "url('/assets/bannercierredos.jpg')", backgroundSize: "cover" }} >
        <BannerEstatico />
      </div>

      <WhatsAppButton />
      <Footer />
    </div>


  );
}