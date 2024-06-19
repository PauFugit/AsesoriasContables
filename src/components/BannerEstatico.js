
import Image from 'next/image'
import Link from 'next/link';



const BannerEstatico = () => {
    return (
        <div className="h-96  flex flex-col justify-center items-center">
            <h1 className="text-8xl text-bold uppercase text-custom-green border-4 border-custom-green rounded-full p-8" style={{ letterSpacing: "0.3rem" }}>
                ASESORÍAS VALDIVIA
            </h1>

        </div>


    )
}

export default BannerEstatico;