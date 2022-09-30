import React, {useState} from "react";
//import Card from "reactstrap";

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
    { value: "Maq", label: "Maq. 19" },
    { value: "Maq", label: "Maq. 20" },
    { value: "Maq", label: "Máq. 21" },
    { value: "Maq", label: "Maq. 22" },
    { value: "Maq", label: "Máq. 23" },
    { value: "Maq", label: "Maq. 24" },
    { value: "Maq", label: "Máq. 25" },
    { value: "Maq", label: "Maq. 26" },
    { value: "Maq", label: "Máq. 27" },
    { value: "Maq", label: "Maq. 28" },
    { value: "Maq", label: "Maq. 29" },
    { value: "Maq", label: "Maq. 30" },
    { value: "Maq", label: "Maq. 31" },
    { value: "Maq", label: "Maq. 32" },
    { value: "Maq", label: "Maq. 33" },
    { value: "Maq", label: "Maq. 34" },
    { value: "Maq", label: "Maq. 35" },
    { value: "Maq", label: "Maq. 36" },
    { value: "Maq", label: "Maq. 37" },
    { value: "Maq", label: "Maq. 38" },
    { value: "Maq", label: "Maq. 39" },
    { value: "Maq", label: "Maq. 40" },
    { value: "Maq", label: "Maq. 41" },
    { value: "Maq", label: "Maq. 42" },
    { value: "Maq", label: "Maq. 43" },
    { value: "Maq", label: "Maq. 44" },
    { value: "Maq", label: "Maq. 45" },
    { value: "Maq", label: "Maq. 46" },
    { value: "Maq", label: "Maq. 47" },
    { value: "Maq", label: "Maq. 48" }
]


import {
    Container,Card,CardBody
  } from "reactstrap";

const CorredorUni = () => {
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <div>
            <h4>Datos Ingresados del corredor</h4>
            <Card>
                <CardBody>
            <form action="">

        
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

            </tr>
        
     </tbody>
       </table>
       <button type="submit"  className="btn btn-primary" >Grabar</button>
     </form>
     </CardBody>
     </Card>
        </div>
      </Container>
    </div>
    </React.Fragment>
  )
}

export default CorredorUni;
