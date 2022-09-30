import React, { useState } from "react";
import './Bobinero.css'

 
  



import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";



//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { string } from "prop-types";

const Index = () => {

  document.title = "Solicitudes | Skote - Vite React Admin & Dashboard Template";


  const turno =[
    { value: "Du", label: "Día" },
    { value: "De", label: "Noche" },
    ]


    const noMaquina = [
      { value: "maq 18", label:"Maq 19", label1:"Maq 20"},
    ]


  return (
   
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Bodega" breadcrumbItem="Bobinero" />
          <form action="">
          <table>
            <thead>
              <tr>
              <label style={{display: 'flex', flexDirection: 'column', marginRight: '1rem', color: 'blue' }} htmlFor="">Turno 
              <select name="" id="" className="bodyBobinero">
              <option hidden selected>Seleccione</option>
                    <option value="" >Día</option>
                    <option value="">Noche</option>
                  </select>
                </label>
                <td>
                <label style={{display: 'flex', flexDirection: 'column',  color: 'blue'}} htmlFor="">Fecha
              <input type="date" />    
                </label>
                </td>

              </tr>
              <tr>
                <label style={{display: 'flex', flexDirection: 'column', marginRight: '1rem',  color: 'blue'}} htmlFor="">Supervisor 
                <input type="text" className="bodyBobinero" />
                </label>
              </tr>
              <tr>
                {/* Encabezados de la tabla*/}
                <th className="rojo">No. Maquina</th>
                <th className="rojo">Operador/ Ayudante</th>
                <th className="rojo">Produccion de Bobinas</th>
                <th className="rojo">Produccion de Desperdicios</th>
                <th className="rojo">Produccion de Duro</th>
              </tr>
            </thead>
            {/** Cuerpo de la tabla Bobinero  */}
            <tbody className="Bobinero">
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                    <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>


              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                    <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                    <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                  <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                  <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select name="" id="">
                  <option hidden selected>Seleccione</option>
                  <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>
              <tr>
                {/** */}
                <td className="styleTD">
                  {/** No Maquina */}
                  <select >
                    <option hidden selected>Seleccione</option>
                    <option value="">Maquina 19</option>
                    <option value="">Maquina 20</option>
                    <option value="">Maquina 21</option>
                  </select>
                 
                </td>
                {/**Input de nombre de  Operador / Ayudante */}
                <td className="styleTD">
                  <input type="text" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Bobinas */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>
                {/**Input de Produccion de Desperdicios */}
                <td className="styleTD">
                  <input type="number" className="bodyBobinero" />
                </td>

                {/**Input de Produccion de Duro */}
                <td className="styleTD">
                  <input type="number"  className="bodyBobinero"/>
                </td>
              </tr>

            </tbody>
        
          </table>
          <button type="submit" className="styleButton" >Enviar</button>

          </form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index;