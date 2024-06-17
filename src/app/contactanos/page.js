
import BannerCierre from '@/components/BannerCierre';
import Footer from '@/components/Footer';
import Formulario from '@/components/Formulario';
import NavBar from '@/components/NavBar';



export default function Home() {
    return (
      <div>
       <main>
        <div className="w-full bg-banner-bg bg-center">
          <div className="w-full bg-black opacity-80 text-white">
            <NavBar />
            <BannerCierre/>
          </div>
        </div>
      </main>
        <div>
          <Formulario/>
        </div>
  
          
  
        <Footer />
      </div>
  
    );
  }