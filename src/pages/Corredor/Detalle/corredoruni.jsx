import React, {useState} from "react";

import Select from "react-select";


const options =[
    { value: "Du", label: "Duro" },
    { value: "De", label: "Desperdicio" },

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
                <input type="number"  />
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
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
            <div className="mb-3">
                <label htmlFor=""></label>
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                title="bodegas"
                options={options}
                // isMulti
                />
            </div> 
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
            <div className="mb-3">
                <label htmlFor=""></label>
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                options={options}
                // isMulti
                />
            </div>
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>

        </tr>
        <tr>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="text"  />
            </td>

            <td>
            <div className="mb-3">
                <label htmlFor=""></label>
             <Select
                classNamePrefix="select2-selection"
                placeholder="Buscar..."
                options={options}
                // isMulti
                />
            </div>

            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text" />
            </td>
           
        </tr>
        <br />
        <br />
        <tr>
            <th>Solicitado por</th>
            <th>Entregado Por</th>
        </tr>
        <tr>
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
