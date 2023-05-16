
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { abiPlatziFoodAddress, cultivoAddress } from "../../config";

import PlatziFood from "../../utils/abi/PlatziFood.json";
import Link from 'next/link';
import cultivosAbi from "../../utils/abi/cultivos.json";
import { useRouter } from 'next/router';

export default function Home() {
  // const dishes = [
  //   {
  //     url:
  //       "https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg",
  //     name: "Gallo Pinto",
  //     country: "Comida típica de Costa Rica",
  //   },
  // ];

  const [dishes, setDishes] = useState([]);

  const getAllDishes = async () => {
    const queryString = window.location.search;
    // Crear un objeto con los valores de los parámetros
    const params = new URLSearchParams(queryString);
    // Obtener el valor de un parámetro específico por su nombre
    const paramValue = params.get('id');

    console.log(paramValue);
    
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.STAGING_ALCHEMY_KEY
    );
    const contract = new ethers.Contract(
      cultivoAddress,
      cultivosAbi,
      provider
    );

    const dishes = await contract.getCultivos();
    console.log(dishes);
    setDishes(dishes);
  };

  useEffect(() => {
    getAllDishes();
  }, []);


  return (
    <div className="flex justify-center">


      <Link href="/floors/add-floor">
        add
      </Link>

      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {dishes.map((food, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img style={{ height: "20rem" }} src={food.detalles.url} />
              <div className="p-4">
                <p
                  style={{ height: "40px" }}
                  className="text-2xl font-semibold"
                >
                  {food.detalles.nombre}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p>{food.detalles.lote}</p>
                  <p className="text-gray-400">{food.detalles.origen}</p>
                </div>
                {/* {<Link href={`/floors/show-floor?id=${food.id}`}> */}
                <Link href="/floors/show-floor">
                  add
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
