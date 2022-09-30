import React from 'react'
import '../IsraelRuben/israelruben.css'
import {
    Container,
  } from "reactstrap";

import Breadcrumbs from "/src/components/Common/Breadcrumb";

const israelruben = () => {
  return (
    <div className="page-content">
         <Container fluid>
         <Breadcrumbs title="Inicio" breadcrumbItem="Modulo Bodeguero" />
        <div>

            {/*  Formulario de ingreso bodega  */}
         <form className="row g-3 formulario__size">

         <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">Selecciona Materia Prima</label>
            <select id="inputState" className="form-select">
              <option selected>HDPE VIRGEN SELLADO  FORMOLENE E924</option>
              <option>HDPE VIRGEN SELLADO  FORMOLENE E924</option>
              <option>HDPE VIRGEN SELLADO EQUISTAR L5005</option>
              <option>HDPE VIRGEN SELLADO BRASKEM BIRNODAL HDF1050</option>
              <option>VIRGEN SELLADO CHANNEL 305-FD</option>
              <option>HDPE VIRGEN SELLADO CERTENE COD-HWF-852</option>
              <option>HDPE VIRGEN SELLADO DOW DGDC-2100</option>
              <option>HDPE VIRGEN SELLADO SNETOR COD-0060F</option>
              <option>HDPE VIRGEN SELLADO PRIMALENE WPP-831</option>
              <option>HDPE VIRGEN SELLADO BRASKEM BIRNODAL HDF8000</option>
              <option>HDPE VIRGEN SELLADO EXXON MOBIL 7960-13</option>
              <option>HDPE VIRGEN SELLADO SACO BLANCO COD-2285</option>
              <option>HDPE VIRGEN SELLADO CHEMICAL FL7000</option>
              <option>HDPE VIRGEN SELLADO VIRGEN BOROUGE COD-1460</option>
              <option>HDPE VIRGEN SELLADO CIPLAS COD-HF0851B</option>
              <option>HDPE VIRGEN SELLADO SASOL HD-5110FLX</option>
              <option>HDPE VIRGEN SELLADO ´PACIFIC COD-HMW 9-50</option>
              <option>HDPE VIRGEN SELLADO SABIC COD-FJ00952</option>
              <option>HDPE VIRGEN SELLADO LOTRENE COD-144</option>
              <option>HDPE VIRGEN SELLADO INEOS J52-226</option>
              <option>HDPE VIRGEN SELLADO HANWHA F120A</option>
              <option>HDPE NATURAL IMPORTADO SELLADO DE PACA</option>
              <option>HDPE VIRGEN SELLADO PE-6060</option>
              <option>HDPE VIRGEN SELLADO QAMAR COD-F1</option>
              <option>HDPE VIRGEN SELLADO VISTA MAX 6202</option>
              <option>HDPE VIRGEN SELLADO EXELENE 70010-H21</option>
              <option>HDPE VIRGEN SELLADO STAR RESING F5949 BAG</option>
              <option>HDPE VIRGEN SELLADO BASELL</option>
              <option>HDPE VIRGEN SELLADO CIPLAS COD-</option>
              <option>HDPE VIRGEN SELLADO OSTERLENE 0595</option>
              <option>HDPE VIRGEN SELLADO INDORAMA</option>
              <option>HDPE VIRGEN SELLADO CINPOL COD- HM6015</option>
            </select>
          </div>




          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label">Operador / Ayudante</label>
            <input type="password" className="form-control" id="inputPassword4"/>
          </div>

          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">Selecciona Tú Nombre</label>
            <select id="inputState" className="form-select">
              <option selected>Pedro Coc</option>
              <option>Manuel Ortiz</option>
              <option>Manuel Ortiz</option>
              <option>Manuel Ortiz</option>
              <option>Manuel Ortiz</option>
              <option>Manuel Ortiz</option>
            </select>
          </div>


          <div className="col-3">
            <label htmlFor="inputAddress" className="form-label">No. De Envió</label>
            <input type="number" className="form-control" id="inputAddress" placeholder="" />
          </div>

          <div className="col-3">
            <label htmlFor="inputAddress2" className="form-label">Ingresos UNI</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="" />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputCity" className="form-label">Ingreso Por Traslado De Material</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">Ingreso bodega</label>
            <select id="inputState" className="form-select">
              <option selected>Bodega 5</option>
              <option>Bodega 6</option>
              <option>Bodega 7</option>
              <option>Bodega 8</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Ingresos Inventario 2</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
         
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Ingresos Paletizadora</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        
        
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Ingresos Proveedores</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>

          
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Ingresos Por Ajuste De Inventario</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">INGRESAR</button>
          </div>
  </form>  

  {/* tabla en donde se guardan los datos de formulario */}

  <table className="table">
    
    <thead className="table-dark">
    <tr>
      <th className="col-md-2 center">Materia Prima</th>
      <th className="font__size">Operador / Ayudante</th>
      <th className="font__size">Nombre</th>
      <th className="font__size">No. De Envió</th>
      <th className="font__size">Ingresos UNI</th>
      <th className="font__size">Ingreso por Traslado De Material</th>
      <th className="font__size">Ingreso Bodega</th>
      <th className="font__size">Ingreso Inventario 2</th>
      <th className="font__size">Ingreso Paletizadora</th>
      <th className="font__size">Ingreso Proveedores</th>
      <th className="font__size">Ingresos Por Ajuste De Inventario</th>
    </tr>
    </thead>

    <tbody>
      
    </tbody>
  </table>
         




        </div>
      </Container>
    </div>
  )
}

export default israelruben
