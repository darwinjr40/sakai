
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { abiPlatziFoodAddress } from "../../config";

import PlatziFood from "../../utils/abi/PlatziFood.json";
import Link from 'next/link';

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
    console.log('gho');
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.STAGING_ALCHEMY_KEY
    );
    const contract = new ethers.Contract(
      abiPlatziFoodAddress,
      PlatziFood.abi,
      provider
    );

    const dishes = await contract.getAllPlatziFoods();
    console.log(dishes);
    setDishes(dishes);
  };

  useEffect(() => {
    getAllDishes();
  }, []);


  return (
    <div className="flex justify-center">
      

        <Link href="/dish/add-dish">
            add
        </Link>
      
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {dishes.map((food, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img style={{ height: "20rem" }} src={food.foodUrl} />
              <div className="p-4">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  {food.foodName}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p>{food.foodName}</p>
                  <p className="text-gray-400">{food.originCountry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
