
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NuestrosClientes from '@/components/NuestrosClientes';
import Valores from '@/components/Valores';



export default function Home() {
    return (
      <div>
       <main>
        <div className="w-full bg-banner-bg bg-center">
          <div className="w-full bg-black opacity-80 text-white">
            <NavBar />
          
          </div>
        </div>
      </main>
        <section>
          <AboutUs/>
        </section>
  
          <section>
            <Valores/>
          </section>
          
          <section>
            <NuestrosClientes/>
          </section>
  
        <Footer />
      </div>
  
    );
  }