import BlogComponent from './BlogComponent';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogSection() {
  return (
    <div className="p-10 xl:p-20">
    <div className="flex fex-col md:flex-row items-center justify-between font-grotesk  text-custom-blue ">
      <div className="flex flex-col md:space-y-12">
        <div className="flex flex-col md:flex-row md:space-x-12 ">
          <Link href="/noticias" className='hover:bg-custom-green hover:text-custom-blue rounded-full'>
            <span className="flex items-center px-8 py-2 bg-transparent rounded-full shadow-lg hover:shadow-xl hover:custom-green">
              <Image src="/icons/iconoblog.png" width={150} height={150} alt="Blog" />
              <div className="ml-4 ">
                <h2 className="text-4xl">BLOG</h2>
                <p className="text-s">Datos y noticias para impulsar tu <br></br>negocio y marca personal</p>
              </div>
            </span>
          </Link>
          <Link href="/servicios" className='hover:bg-custom-green hover:text-custom-blue rounded-full'>
            <span className="flex items-center px-8 py-2 bg-transparent rounded-full shadow-lg hover:shadow-xl">
              <Image src="/icons/iconoasesorias.png" width={150} height={150} alt="Asesorías" />
              <div className="ml-4">
                <h2 className="text-4xl ">ASESORÍAS</h2>
                <p className="text-s">personalizadas y confidenciales</p>
              </div>
            </span>
          </Link>
        </div>
        <Link href="/contactanos" className='hover:bg-custom-green hover:text-custom-blue rounded-full' >
          <span className="flex items-center px-8 py-4 bg-transparent rounded-full shadow-lg hover:shadow-xl">
            <Image src="/icons/iconoescribenos.png " width={150} height={150} alt="Servicios" />
            <div className="ml-4">
              <h2 className="text-4xl">COTIZA NUESTROS <br></br>SERVICIOS</h2>
              <p className="text-s">Asesorías Valdivia cuenta con una serie de servicios que<br></br> pueden ayudarte a llevar tu negocio al éxito</p>
            </div>
          </span>
        </Link>
        <div className="block xl:hidden mt-4">
          <Image src="/icons/flechagranderesponsiva.png" width={400} height={400} alt="Imagen" />
        </div>
      </div>
      <div className="hidden  xl:block flex-shrink-0">
        <Image src="/icons/iconoflechagrande.png" width={400} height={400} alt="Imagen" />
      </div>
    </div>
    </div>
  );
};