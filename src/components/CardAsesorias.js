import Image from 'next/image';
import Link from 'next/link';

const CardAsesorias = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className={`rounded-lg overflow-hidden flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mb-6`}>
        <div className="relative hidden w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="p-6 md:w-2/3 flex flex-col justify-between font-alternative">
          <div className="flex flex-col justify-between py-4 md:py-20">
            <h2 className="text-5xl md:text-7xl mb-4 md:mb-10 text-custom-blue" style={{ letterSpacing: "0.5rem" }}>{title}</h2>
            <div className="relative w-full h-64 mb-4 md:hidden">
              <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-2xl md:text-3xl text-custom-blue mb-4">{description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cotiza">
              <p className="text-2xl md:text-4xl py-1 px-3 bg-custom-green text-custom-blue rounded-full inline-flex items-center hover:bg-custom-blue hover:text-custom-white">
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
