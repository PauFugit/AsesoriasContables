import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Clientes = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="text-custom-blue font-grotesk container mx-auto px-4 pb-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <div className="relative w-40 h-40">
              <Image src={image.src} alt={image.alt} layout="fill" className="object-cover rounded-full" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`} 
      style={{ ...style, display: 'block', right: '20px' }}
      onClick={onClick}
    >
      <Image src="/icons/flechaverdeizquierda.png" alt="Next" width={40} height={40} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`} 
      style={{ ...style, display: 'block', left: '20px' }}
      onClick={onClick}
    >
      <Image src="/icons/flechaverdederecha.png" alt="Previous" width={40} height={40} />
    </div>
  );
};

export default Clientes;