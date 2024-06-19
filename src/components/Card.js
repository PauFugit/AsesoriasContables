import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-custom-green rounded-2xl shadow-md py-4 flex flex-col items-center">
      <div className="mb-3 w-full h-60 relative">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-xl" 
        />
      </div>
      <div className="w-full text-left px-4">
        <h3 className="text-2xl font-bold ">{title}</h3>
      </div>
    </div>
  );
};

export default Card;