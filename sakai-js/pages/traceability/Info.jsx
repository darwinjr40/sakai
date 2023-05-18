"use client";
import Image from "next/image";
import React from "react";

export const Info = () => {
  return (
    <div>
      <div className="px-3 mt-5 lg:text-lg">
        <h1 className="font-semibold lg:font-bold text-2xl lg:text-4xl text-[#58652A]">
          Título del producto
        </h1>
        <span className="block mt-1">Nro Lote: 336-556-88</span>
        {/* <p className="font-light text-slate-700 mt-3 text-justify lg:text-xl lg:font-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          expedita beatae doloremque corrupti odit ipsam qui minima distinctio,
          voluptatem voluptates, consequuntur earum quae non repellendus ratione
          facere ea. Aliquid, recusandae?
        </p> */}
        <div className="flex flex-col mt-3 space-y-0 text-slate-700">
          <span>
            Fecha de siembra <span>13-01-2022</span>
          </span>
          <span>
            Fecha de cosecha <span>5-05-2022</span>
          </span>
        </div>
      </div>

      <div className="px-3 mt-8">
        <h1 className="font-semibold text-xl">Origen</h1>
        <div className="bg-[#58652A] h-[2px]"></div>
        <div className="flex flex-col text-slate-700 my-3">
          <span className="font-semibold">
            Lugar de origen: <span className="font-normal">San Javier</span>
          </span>
          <span className="font-semibold">
            Nombre de invernadero:{" "}
            <span className="font-normal">Invernadero Darwin</span>
          </span>
        </div>
      </div>
      <Image
        src={"/map.png"}
        alt={""}
        width={300}
        height={300}
        style={{
          objectFit: "cover",
        }}
        className="w-full"
      />

      <div className="px-3 mt-5 text-slate-600">
        <h1 className="font-semibold lg:font-bold text-xl lg:text-4xl text-[#58652A]">
          Detalles del cultivo
        </h1>
        <div className="bg-[#58652A] h-[2px]"></div>

        {/* <h2 className="font-semibold mt-3">Semillas utilizadas </h2> */}
        <h2 className="font-semibold mt-3">Recomendacion</h2>
        <p className="lg:text-xl">
            Ubicación: Colócalas cerca de una ventana con luz filtrada. Temperatura:  18-24°C durante el día y ligeramente más frescas por la noche.  Humedad: Las orquídeas requieren un ambiente húmedo pero bien ventilado.

        </p>
        {/* <h2 className="font-semibold mt-3">Nutrientes utilizados </h2>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat
          praesentium sequi amet officia, illo inventore temporibus mollitia
          numquam consequatur sunt magnam omnis.
        </p> */}
        <span className="block mt-5 font-semibold">
          Método de cultivo utilizado: {" "}
          <span className="font-normal">Cultivo hidropónico</span>
        </span>
        <span className="block mt-1 font-semibold">
          Tipo de riego: <span className="font-normal">Riego por goteo</span>
        </span>
      </div>
    </div>
  );
};
