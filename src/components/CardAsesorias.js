import Image from 'next/image'

const CardAsesorias = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mb-6`}>
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <button className="bg-green-100 text-green-700 py-2 px-4 rounded-md inline-flex items-center self-start md:self-end">
          Cotiza aquí
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CardAsesorias;
