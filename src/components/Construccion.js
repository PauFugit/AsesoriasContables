import React from 'react'
import Image from 'next/image'

export default function Construccion() {
    return (
        <div>
            <nav className="bg-custom-blue fixed w-full top-0 z-50" >
                <img
                    src="/images/Logouno.png"
                    style={{width:"500px"}}
                    
                />
            </nav>
            
            <div className='bg-custom-blue flex' style={{ paddingTop: '10rem' }}>
            <img src="/images/flechaverdederecha.png" alt="Flecha verde hacia la derecha" className="" style={{width:"150px"}} />

                <h1 className='text-4xl py-10 px-10 text-custom-white'><i>En construcción ... <br></br> ¡Pronto tendremos novedades para ti!</i></h1>
            </div>
            <div className='bg-center' style={{ backgroundImage: "url('/assets/bannercierredos.jpg')", backgroundSize: "cover" }}>
                <div className="h-64 md:h-80 lg:h-96 flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold uppercase text-custom-white border-2 md:border-4 border-custom-green rounded-full px-4 md:px-8 lg:px-12 py-2 md:py-4 lg:py-8" style={{ letterSpacing: "0.3rem" }}>
                        ASESORÍAS VALDIVIA
                    </h1>
                </div>

            </div>
        </div>

    )
}
