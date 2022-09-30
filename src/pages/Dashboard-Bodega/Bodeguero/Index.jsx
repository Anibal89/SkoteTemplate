import React, { useState } from "react";

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

const Index = () => {

  document.title = "Solicitudes | Skote - Vite React Admin & Dashboard Template";


  return (
   
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Bodega" breadcrumbItem="Bobinero" />

          <table>
            <thead>
              <tr>
                <th>No. Maquina</th>
                <th>Operador/
                  <th>Ayudante</th>
                </th>
                <th>Produccion de Bobinas</th>
                <th>Produccion de Desperdicios</th>
                <th>Produccion de Duro</th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <th>
                  <input type="text" />
                </th>
                <th>
                  <input type="text" />
                </th>
                <th>
                  <input type="text" />
                </th>
                <th>
                  <input type="text" />
                </th>
                <th>
                  <input type="text" />
                </th>

              </tr>

            </tbody>
          </table>


        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index