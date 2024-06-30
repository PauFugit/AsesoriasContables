'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-blue fixed w-full top-0 z-50" >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <Link href="/"
             className="text-white font-bold text-xl hidden md:block ">
              <Image 
              src="/Logouno.png"
              width={400}
              height={400}
              alt="Logo Asesorías Valdivia"
               ></Image>
            </Link>
            <Link href="/"
             className="text-white font-bold text-xl block md:hidden">
              <Image 
              src="/Logouno.png"
              width={250}
              height={250}
              alt="Logo Asesorías Valdivia"
               />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/nosotros"
                   className="text-gray-300  hover:text-custom-green px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" ></Image>¿Quiénes Somos?
                </Link>
                <Link href="/servicios"
                   className="text-gray-300  hover:text-custom-green px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" ></Image>Servicios
                </Link>
                <Link href="/noticias"
                  className="text-gray-300  hover:text-custom-green px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" ></Image>Noticias
                </Link>
                <Link href="/contactanos"
                  className="text-gray-300  hover:text-custom-green px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" ></Image>Contáctanos
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-custom-green hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/nosotros"
              className="text-gray-300 hover:bg-custom-green hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                ¿Quiénes somos?
            </Link>
            <Link href="/servicios"
              className="text-gray-300 hover:bg-custom-green hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios
            </Link>
            <Link href="/noticias"
               className="text-gray-300 hover:bg-custom-green hover:text-white block px-3 py-2 rounded-md text-base font-medium">Noticias
            </Link>
            <Link href="/contactanos"
              className="text-gray-300 hover:bg-custom-green hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contáctanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;