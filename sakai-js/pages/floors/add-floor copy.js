import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abiPlatziFoodAddress, cultivoAddress } from "../../config";
import { useRouter } from "next/router";

import PlatziFood from "../../utils/abi/PlatziFood.json";
import cultivosAbi from "../../utils/abi/cultivos.json";

export default function AddDish() {
  // const [formInput, updateFormInput] = useState({
  //   fileUrl: "",
  //   name: "",
  //   originCountry: "",
  // });

  const [formInput, updateFormInput] = useState({
    nombre: "",
    lote: "",
    origen: "",
    url: "",
    ubicacion: "",
    fechaDeSiembra: "",
    fechaDeCosecha: "",
    metodoDeCultivoUtilizado: "",
    fechaDeVencimiento: "",
    esOrganico: true,
    recomendacionDeGuardado: "",
    nutrientes: "",
    recomendacionDeConsumo: "",
  });

  const addDish = async () => {
    // const { ethereum } = window;
    // if(ethereum) {
        // const provider = new ethers.providers.Web3Provider(ethereum);    
        // const signer = provider.getSigner();
        // // const contract = new ethers.Contract(abiPlatziFoodAddress, PlatziFood.abi, signer);
        // const contract = new ethers.Contract(cultivoAddress, cultivosAbi, signer);
        // console.log(Object.values(formInput));
        // const data = Object.values(formInput);
        // const transaction = await contract.agregarCultivo(data);
        // transaction.wait();
    //     router.push('/');
    // }

    const { ethereum } = window;
    if(ethereum) {
        // const provider = new ethers.providers.Web3Provider(ethereum);    
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract(abiPlatziFoodAddress, PlatziFood.abi, signer);
        // const transaction = await contract.addPlatziFood(formInput.fileUrl, formInput.name, formInput.originCountry);
        // transaction.wait();
        router.push('/');
    }
  }


  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="nombre"
          className="mt-8 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, nombre: e.target.value })
          }
        />
        <input
          placeholder="lote"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, lote: e.target.value })
          }
        />
        <input
          placeholder="origen"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, origen: e.target.value })
          }
        />
        <input
          placeholder="url"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, url: e.target.value })
          }
        />
        <input
          placeholder="ubicacion"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, ubicacion: e.target.value })
          }
        />
        <input
          placeholder="fechaDeSiembra"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fechaDeSiembra: e.target.value })
          }
        />
        <input
          placeholder="fechaDeCosecha"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fechaDeCosecha: e.target.value })
          }
        />
        <input
          placeholder="metodoDeCultivoUtilizado"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, metodoDeCultivoUtilizado: e.target.value })
          }
        />
        <input
          placeholder="fechaDeVencimiento"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fechaDeVencimiento: e.target.value })
          }
        />
        {/* <input
          placeholder="esOrganico"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, esOrganico: e.target.value })
          }
        /> */}
        <input
          placeholder="recomendacionDeGuardado"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, recomendacionDeGuardado: e.target.value })
          }
        />
        <input
          placeholder="nutrientes"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, nutrientes: e.target.value })
          }
        />
        <input
          placeholder="recomendacionDeConsumo"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, recomendacionDeConsumo: e.target.value })
          }
        />
        <button
          onClick={addDish}
          className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"
        >
          Add food
        </button>
      </div>
    </div>
  );
}
