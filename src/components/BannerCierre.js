'use client'
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const BannerCierre = () => {
  const [text] = useTypewriter({
    words: [
      "ASESÓRATE",
      "FÓRMATE",
      "CRECE",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
   
    <div className="h-96  flex flex-col justify-center items-center"
    
    >
      <h1 className="text-8xl uppercase border-4 border-custom-green rounded-full px-20 text-custom-green" style={{letterSpacing:"0.2rem"}}>
        ASESORÍAS VALDIVIA
      </h1>
      <p className="text-base md:text-3xl font-semibold mt-2 text-custom-white shadow-custom-green">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
    
  );
};

export default BannerCierre;