"use client";
import React, { useState } from "react";
import { TemperaturaChart } from "./Temperatura";
import { CalidadAireChart } from "./CalidadAire";
import { HumedadChart } from "./Humedad";

export const GraphicsSection = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="">
      <select
        name="select-graphic"
        id="select-graphic"
        onChange={(e) => setSelected(e.target.value)}
        className="my-1 border m-auto outline-none rounded-md p-1"
      >
        <option value={1}>Temperatura</option>
        <option value={2}>Humedad</option>
        <option value={3}>Calidad de aire</option>
      </select>

      {selected === "1" ? (
        <TemperaturaChart />
      ) : selected === "2" ? (
        <HumedadChart />
      ) : (
        <CalidadAireChart />
      )}
    </div>
  );
};
