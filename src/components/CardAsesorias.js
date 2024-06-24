import Image from 'next/image';
import Link from 'next/link';

const CardAsesorias = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className={`rounded-lg overflow-hidden flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mb-6`}>
        <div className="relative w-full h-64 md:w-1/3 md:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="p-6 w-full md:w-2/3 flex flex-col justify-between font-alternative">
          <div className="flex flex-col justify-between py-4 md:py-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-10 text-custom-blue" style={{ letterSpacing: "0.5rem" }}>{title}</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-custom-blue mb-4">{description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cotiza">
              <p className="text-lg md:text-2xl lg:text-4xl py-1 px-3 bg-custom-green text-custom-blue rounded-full inline-flex items-center hover:bg-custom-blue hover:text-custom-white">
                Cotiza aquí
              </p>
            </Link>
            <div className="hidden md:block">
              <Image
                src="/icons/flechaazulizquierda.png"
                width={50}
                height={50}
                alt="Flecha azul izquierda"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAsesorias;
