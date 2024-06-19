import Link from 'next/link';

const BlogComponent = ({ href, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="flex flex-col md:space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link href="/noticias">
            <span className="flex items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl border border-blue-900">
              <Image src="/icons/blog-icon.png" width={50} height={50} alt="Blog" />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-blue-900">BLOG</h2>
                <p className="text-blue-700">Datos y noticias para impulsar tu negocio y marca personal</p>
              </div>
            </span>
          </Link>
          <Link href="/servicios">
            <span className="flex items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl border border-blue-900 mt-4 md:mt-0">
              <Image src="/icons/asesorias-icon.png" width={50} height={50} alt="Asesorías" />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-blue-900">ASESORÍAS</h2>
                <p className="text-blue-700">Personalizadas y confidenciales</p>
              </div>
            </span>
          </Link>
        </div>
        <Link href="/contactanos">
          <span className="flex items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl border border-blue-900 mt-4">
            <Image src="/icons/flechaazulizquierda.png" width={50} height={50} alt="Servicios" />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-blue-900">COTIZA NUESTROS SERVICIOS</h2>
              <p className="text-blue-700">Asesorías Valdivia tiene una serie de servicios que pueden ayudarte a llevar tu negocio al éxito</p>
            </div>
          </span>
        </Link>
        <div className="block md:hidden mt-4">
          <Image src="/icons/flechaazulizquierda.png" width={400} height={400} alt="Imagen" />
        </div>
      </div>
      <div className="hidden md:block flex-shrink-0">
        <Image src="/icons/flechaazulizquierda.png" width={400} height={400} alt="Imagen" />
      </div>
    </div>
  );
}
export default BlogComponent;