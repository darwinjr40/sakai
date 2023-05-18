import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import { TriStateCheckbox } from "primereact/tristatecheckbox";

import { InputText } from "primereact/inputtext";
import { CustomerService } from "../../demo/service/CustomerService";
import { ProductService } from "../../demo/service/ProductService";
import { Rating } from "primereact/rating";
import cultivosAbi from "../../utils/abi/cultivos.json";
import { abiPlatziFoodAddress, cultivoAddress } from "../../config";
import { ethers } from "ethers";

const DataTableA = () => {
  const [dishes, setDishes] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(
      dishes.map(({ data }, i) => {
        const dataArray = data.split(",");
        if (dataArray.length === 1) return {};
        return {
          id: i,
          identificador: dataArray[0].trim(),
          temperatura: dataArray[1].trim(),
          humedad: dataArray[2].trim(),
          humo: dataArray[3].trim(),
          fecha: formatFecha(dataArray[4].trim()),
        };
      })
    );
    setValues((actualValues) => {
      return actualValues.filter((objeto) => {
        return Object.keys(objeto).length !== 0;
      });
    });
  }, [dishes]);

  //useEffect(() => {}, [values]);

  const getAllDishes = async () => {
    //console.log("gho");
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.STAGING_ALCHEMY_KEY
    );
    const contract = new ethers.Contract(cultivoAddress, cultivosAbi, provider);
    const dishes = await contract.getSensoresData();
    //console.log(dishes);
    setDishes(dishes);
  };

  useEffect(() => {
    getAllDishes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatFecha = (fechaIso8601) => {
    //const fechaIso8601 = "2023-05-16T10:50:58.059Z";
    const fecha = new Date(fechaIso8601);

    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");

    const hora = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    const segundos = String(fecha.getSeconds()).padStart(2, "0");

    const fechaFormateada = `${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
            <a href="https://blynk.cloud/">Monitoreo de Sensores</a>
          <h5>Filter Menu1</h5>
          <DataTable
            value={values}
            paginator
            className="p-datatable-gridlines"
            showGridlines
            rows={values.length}
            dataKey="id"
            /* filters={filters1} */
            filterDisplay="menu"
            /* loading={loading1} */
            responsiveLayout="scroll"
            emptyMessage="No customers found."
          /* header={header1} */
          >
            {
              <Column
                field="identificador"
                header="Identificador"
                filter
                filterPlaceholder="Search by id"
                style={{ minWidth: "12rem" }}
              />
            }
            <Column
              field="temperatura"
              header="temperatura"
              filterField="temperatura"
              style={{ minWidth: "12rem" }}
              filter
              filterPlaceholder="Search by value"
            />
            <Column
              field="humedad"
              header="humedad"
              filterField="Humedad"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "14rem" }}
            />
            <Column
              field="humo"
              header="humo"
              filterField="Humo"
              dataType="date"
              style={{ minWidth: "10rem" }}
            />
            <Column
              field="fecha"
              header="date"
              filterField="Fecha"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default DataTableA;
