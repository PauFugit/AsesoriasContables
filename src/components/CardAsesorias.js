import Image from 'next/image'

const CardAsesorias = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className='container'>
    <div className={`rounded-lg overflow-hidden flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mb-6`}>
      <div className="w-1/3 relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between font-alternative">
        <div className='py-20'>
          <h2 className="text-7xl mb-10 text-custom-blue" style={{ letterSpacing: "0.5rem" }}>{title}</h2>
          <p className="text-2xl text-custom-blue mb-4 ">{description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-4xl py-1 px-3 bg-custom-green text-custom-blue rounded-full inline-flex items-center hover:bg-custom-blue hover:text-custom-white">
            Cotiza aquí
          </button>
          <Image
            src="/icons/flechaazulizquierda.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardAsesorias;
