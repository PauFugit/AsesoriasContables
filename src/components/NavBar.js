'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return(
    <div>
        <nav className="w-full top-0 left-0 right-0 z-50 bg-custom-blue fixed">
            <div className="justify-between  px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        <Link
                        href="/">
                            <Image 
                            src="/Logouno.png"
                            width={400}
                            height={400}
                            alt="logo"
                            className='ml-10'
                            />
                        </Link>

                        {/* HAMBURGER MOBILE*/}

                        <div className="md:hidden">
                            <button
                            className="p-2 text-custom-blue rounded-md outline-none focus:border-gray-400"
                            onClick={()=>setNavbar(!navbar)}>

                                {navbar ? (
                                    <Image src="/assets/isotipodos.png"
                                    width={50}
                                    height={50}
                                    alt="logo"/>
                                ) : (
                                    <Image src="/assets/isotipouno.png"
                                    width={50}
                                    height={50}
                                    alt="logo"
                                    className="focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:flex ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex md:space-x-6 mt-8 md:mt-0">
              <li className="flex items-center pb-6 text-xl xl:text-s md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-custom-green border-blue-900 md:hover:text-custom-green">
                <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
                <Link href="/nosotros" onClick={() => setNavbar(!navbar)}>
                  ¿Quiénes somos?
                </Link>
              </li>
              <li className="flex items-center pb-6 text-xl xl:text-s md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-custom-green border-blue-900 md:hover:text-custom-green">
                <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
                <Link href="/servicios" onClick={() => setNavbar(!navbar)}>
                  Servicios
                </Link>
              </li>
              <li className="flex items-center pb-6 text-xl xl:text-s md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-custom-green border-blue-900 md:hover:text-custom-green">
                <Image src="/icons/flechaverdederecha.png" width={25} height={25} alt="icon" className="mr-2" />
                <Link href="/noticias" onClick={() => setNavbar(!navbar)}>
                  Noticias
                </Link>
              </li>
              <li className="flex items-center pb-6 text-xl xl:text-s md:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-custom-green border-blue-900 md:hover:text-custom-green">
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

    </div>

);
}

export default NavBar;