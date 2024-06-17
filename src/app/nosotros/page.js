
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NuestrosClientes from '@/components/NuestrosClientes';
import Valores from '@/components/Valores';



export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
      </main>
      <div style={{ paddingTop: '8rem' }}></div>
      <section>
        <AboutUs />
      </section>
      <section>
        <Valores />
      </section>
      <section className='bg-blue-200'>
        <div className='max-w-6xl mx-auto px-4 py-6'>
          <NuestrosClientes />
        </div>
      </section>
      <Footer />
    </div>

  );
}