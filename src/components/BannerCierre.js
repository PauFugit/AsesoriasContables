'use client'
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const BannerCierre = () => {
  const [text] = useTypewriter({
    words: [
      "ASESÓRATE",
      "FÓRMATE",
      "CRECE.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl uppercase font-bold">
        ASESORÍAS VALDIVIA
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default BannerCierre;