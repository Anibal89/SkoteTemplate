import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

const SwortList = () => {

  //meta title
  document.title = "SwortList | Skote - Vite React Admin & Dashboard Template";


/*----------------------------------------------------------Metodo Get Roles--------------------------------------------------------------------------*/ 
 
  // Metodo Get del Crud
   const [rols, setRol] = useState([]) 

  // Actualizacion de tabla 
  const [listUpdate, setListUpdate] = useState(false) 

  // Uso de  Metodos Mapeo de datos 
   useEffect(() => {
    mapeoDatos()
    setListUpdate(false)
  }, [listUpdate])

  // Mapeo de Datos en Tabla GET 
  const mapeoDatos = async () => {
    const res = await fetch('http://localhost:4000/api/rol', { mode: 'cors' })
    const rols = await res.json()
    setRol(rols)
  }

/*------------------------------------------------------------------------------------------------------------------------------------*/


  

  const inpRow = [{ name: "", file: "" }];
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [inputFields, setinputFields] = useState(inpRow);

  const startDateChange = (date) => {
    setstartDate(date);
  };

  const endDateChange = (date) => {
    setendDate(date);
  };

  // Function for Create Input Fields
  function handleAddFields() {
    const item1 = { name: "", file: "" };
    setinputFields([...inputFields, item1]);
  }

  // Function for Remove Input Fields
  function handleRemoveFields(idx) {
    document.getElementById("nested" + idx).style.display = "none";
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Modulo Prueba" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Modulo Swort Art Online - Crud
                  </CardTitle>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Nombre de rol</th>
                          <th scope="col">Estado rol</th>
                          <th scope="col">Metodos</th>
                        </tr>
                      </thead>
                      <tbody>
                      {rols.map((item) => (
                      <tr key={item.Id_Rol}>
                        <th>{item.Id_Rol}</th>
                        <td>{item.Nombre_Rol}</td>
                        <td>{item.Estado_Rol}</td>
                          <td>
                            <button
                              style={{ color: "#fff" }}
                              /*   onClick={() => handleDelete(item.Id_Rol)} */
                              className="btn btn-danger"
                            >
                              <i className="bx bx-trash"></i>
                            </button>{" "}
                            <button
                              style={{ color: "#fff" }}
                              /*      onClick={() => CambiarEstadoRol(!estados)} */
                              /* onClick={() => handleUpdate(item.Id_Rol)} */
                              className="btn btn-warning"
                            >
                              <i className="dripicons-alarm" style={{width: '125px', height: '30px'}} ></i>
                            </button>
                          </td>
                        </tr>
                           ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Formulario - Crud</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SwortList;
