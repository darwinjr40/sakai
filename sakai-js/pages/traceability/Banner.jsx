import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="relative h-[100vh] flex">
      <div className="relative w-full lg:w-[50%]">
        <div className="h-full w-full bg-[#58652A] absolute bg-opacity-50 -z-[5]"></div>
        <Image
          src={"/Banner/banner.jpg"}
          alt={"banner image"}
          fill
          style={{
            objectFit: "cover",
          }}
          className="absolute -z-10 brightness-[0.7]"
        />
        <h1 className="relative text-4xl lg:text-6xl font-bold text-white text-center top-[30%]">
          BlockHarvest
        </h1>
      </div>
      <div className="bg-[#04293C] lg:w-[50%] absolute lg:relative bottom-0 text-white p-5 flex flex-col items-center justify-center space-y-3 lg:space-y-10">
        <h1 className="w-full font-bold text-3xl lg:text-5xl">
          Gracias por confiar en nosotros
        </h1>
        <p className="text-sm lg:text-2xl font-extralight">
          Queremos que tengas la tranquilidad de saber que nuestro vegetal es de
          la más alta calidad y que se ha cultivado y procesado de manera
          responsable y sostenible. Esperamos que disfrutes de la experiencia de
          conocer más acerca de nuestros productos.
        </p>
        <Image
          src={"/arrow.svg"}
          alt={"arrow"}
          className="z-10"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
