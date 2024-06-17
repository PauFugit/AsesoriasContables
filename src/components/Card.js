import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-green-200 rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="mb-4">
        <Image src={imageSrc} alt={title} width={200} height={120} className="rounded-md" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;