
import BannerCierre from '@/components/BannerCierre';
import Footer from '@/components/Footer';
import Formulario from '@/components/Formulario';
import NavBar from '@/components/NavBar';



export default function Home() {
    return (
      <div>
       <main>
      
            <NavBar />
            
         
      </main>
      
      <div style={{backgroundImage: "url('/fondos/Fondo.png')", paddingTop:'7.1rem'}}></div>
      <BannerCierre/>
        <div>
          <Formulario/>
        </div>
  
          
  
        <Footer />
      </div>
  
    );
  }