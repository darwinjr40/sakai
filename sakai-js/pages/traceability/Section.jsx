"use client";

import React, { useRef, useState } from "react";
import { Banner } from "./Banner";
import { History } from "./History";
import { Temperatura } from "./Temperatura";
import { Info } from "./Info";
import { GraphicsSection } from "./GraphicsSection";

export const Section = () => {
  const options = useRef(["Información", "Historial", "Condiciones"]);
  const [fixed, setFixed] = useState(false);
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div className="relative m-auto 2xl:max-w-[70%]">
      <div className="w-full flex justify-between sticky top-0 z-10">
        {options.current.map((opt, i) => (
          <button
            className={`w-full p-2 font-semibold lg:text-xl lg:py-4 ${
              tabSelected === i ? "bg-[#9bbe41] text-white" : "bg-white"
            }`}
            key={i}
            onClick={() => {
              setTabSelected(i);
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {tabSelected === 0 ? (
        <Info />
      ) : tabSelected === 1 ? (
        <History />
      ) : (
        <GraphicsSection />
      )}
    </div>
  );
};
