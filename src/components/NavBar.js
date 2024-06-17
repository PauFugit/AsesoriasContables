'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
        <div className="bg-center opacity-80 text-white bg-blue-900">
      <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image src="/Logouno.png" width={350} height={300} alt="logo" />
          </Link>

          {/* HAMBURGER MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-blue-700 rounded-md outline-none focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src="/assets/isotipouno.png" width={40} height={40} alt="logo" />
              ) : (
                <Image
                  src="/assets/isotipodos.png"
                  width={40}
                  height={40}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              )}
            </button>
          </div>
        </div>
        <div className={`md:flex ${navbar ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-8 md:mt-0">
            <li className="flex items-center pb-6 text-xs text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-700 border-blue-700 md:hover:text-blue-400 md:hover:bg-transparent">
              <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
              <Link href="/nosotros" onClick={() => setNavbar(!navbar)}>
                ¿Quiénes somos?
              </Link>
            </li>
            <li className="flex items-center pb-6 text-xs text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-700 border-blue-700 md:hover:text-blue-400 md:hover:bg-transparent">
              <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
              <Link href="/servicios" onClick={() => setNavbar(!navbar)}>
                Servicios
              </Link>
            </li>
            <li className="flex items-center pb-6 text-xs text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-700 border-blue-700 md:hover:text-blue-400 md:hover:bg-transparent">
              <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
              <Link href="/noticias" onClick={() => setNavbar(!navbar)}>
                Noticias
              </Link>
            </li>
            <li className="flex items-center pb-6 text-xs text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-700 border-blue-700 md:hover:text-blue-400 md:hover:bg-transparent">
              <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
              <Link href="/contactanos" onClick={() => setNavbar(!navbar)}>
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};


export default NavBar;