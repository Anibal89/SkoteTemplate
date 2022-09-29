import React, {useState} from "react";

import Select from "react-select";

const options =[
    { value: "Du", label: "Duro" },
    { value: "De", label: "Desperdicio" },


]

const opRecepcion =[
    { value: "alta", label: "Alta"},
    { value: "baja", label: "Baja"},
    { value: "mixta", label: "Alta Color Mixta"},
    { value: "negro", label: "Alta Negro"},
    { value: "virgen negro", label: "Alta Virgen Negro"},
    { value: "natural", label: "Alta Natural"},
]

const maquinas =[
    { value: "Maq", label: "Máq. 01" },
    { value: "Maq", label: "Maq. 02" },
    { value: "Maq", label: "Máq. 03" },
    { value: "Maq", label: "Maq. 04" },
    { value: "Maq", label: "Máq. 05" },
    { value: "Maq", label: "Maq. 06" },
    { value: "Maq", label: "Máq. 07" },
    { value: "Maq", label: "Maq. 08" },
    { value: "Maq", label: "Máq. 09" },
    { value: "Maq", label: "Maq. 10" },
]


import {
    Container,
  } from "reactstrap";

const CorredorUni = () => {
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <div>
            <h4>Datos Ingresados del corredor</h4>
        
        <table class="table table-responsive">
    <thead>
        <tr>
            <th>No. Máquina</th>
            <th>Operador</th>
            <th>Tipo de Material</th>
            <th>Recepción</th>
            <th>Cantidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={maquinas}
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={options}
                // isMulti
                />
            </div>

            </td>
            <td  >
            <div className="mb-10">
             <Select 
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={opRecepcion }
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={maquinas}
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={options}
                // isMulti
                />
            </div> 
            </td>

            {/* Celda Recepcion*/}
            <td>
            <div className="mb-3">
             <Select 
                // classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={opRecepcion }
                // isMulti
                />
            </div>

            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={maquinas}
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                options={options}
                // isMulti
                />
            </div>
            </td>
            <td>
            <div className="mb-3">
             <Select 
                // classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={opRecepcion }
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={maquinas}
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="text"  />
            </td>

            <td>
            <div className="mb-3">
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                options={options}
                // isMulti
                />
            </div>

            </td>
            <td>
            <div className="mb-3">
             <Select 
                // classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={opRecepcion }
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="text" />
            </td>
           
        </tr>
        <br />
        <br />
        <tr>
            <th></th>
            <th></th>
            <th>Solicitado por</th>
            <th>Entregado Por</th>
        </tr>
        <tr>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
            <input type="text" />
            </td>
            <td>
            <input type="text" />
            </td>

            
            <td>
                <button className="GrabarRequi">Grabar</button>
            </td>
        </tr>
        
    </tbody>
</table>
        </div>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default CorredorUni;
