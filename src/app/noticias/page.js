
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';



export default function Noticias() {
  return (
    <div className="font-grotesk">
      <main>

        <NavBar />


      </main>
      <div ></div>

      <section>

        <div className="relative text-white">
          <Image
            src="/assets/BannerNoticias.jpg"
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            className=""
          ></Image>
          <div className="relative z-10" style={{paddingTop:"20rem"}}>
            <div className='px-20 py-20'>
            <h1 className="text-7xl text-custom-green" style={{letterSpacing:"0.5rem"}}>NOTICIAS</h1>
            
            <p className="mt-4 text-xl leading-relaxed">
             Aquí podrás encontrar novedades para ti, <br></br> tu empresa o emprendimiento </p>
           </div>
          </div>
        </div>

      </section>



      <Footer />
    </div>

  );
}