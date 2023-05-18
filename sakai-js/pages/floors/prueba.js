
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
        console.log('gho');
        const provider = new ethers.providers.JsonRpcProvider(
            process.env.STAGING_ALCHEMY_KEY
        );
        const contract = new ethers.Contract(
            cultivoAddress,
            cultivosAbi,
            provider
        );
        const dishes = await contract.getSensoresData();
        console.log(dishes);
        // setDishes(dishes);
    };

    useEffect(() => {
        getAllDishes();
    }, []);


    return (
        <div className="flex justify-center">


            {/* <Link href="/floors/add-floor">
        add
      </Link> */}

        </div>
    );
}
