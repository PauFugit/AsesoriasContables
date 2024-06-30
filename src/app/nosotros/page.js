
import AboutUs from '@/components/AboutUs';
import BannerCierre from '@/components/BannerCierre';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NuestrosClientes from '@/components/NuestrosClientes';
import Valores from '@/components/Valores';



export default function Home() {
  return (
    <div className="font-grotesk">
      <main>
        <NavBar />
      </main>
      <div style={{ paddingTop: '5rem' }}></div>
      <section>
        <AboutUs />
      </section>
      <div className="bg-custom-green text-white text-center py-2"> </div>
      <section style={{ backgroundImage: "url('/fondos/fondovalores.png')", backgroundSize: "cover" }}>
        <Valores />
        <div className="bg-custom-green text-white text-center py-2"> </div>
      
      

      </section>
      <div className="bg-custom-green text-white text-center py-2"> </div>
      <div style={{ backgroundImage: "url('/assets/bannerextrados.jpg')", backgroundSize: "cover" }}>
        <BannerCierre />
      </div>
      <div className="bg-custom-green text-white text-center py-2"> </div>
      <Footer />
    </div>

  );
}