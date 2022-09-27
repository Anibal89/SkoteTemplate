import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

const SwortList = () => {
  //meta title
  document.title = "SwortList | Skote - Vite React Admin & Dashboard Template";

  /*----------------------------------------------------------Metodo Get Roles------------------------------------------------------------------------------------------*/

  // Metodo Get del Crud rol
  const [rols, setRol] = useState([]);

  // Actualizacion de tabla
  const [listUpdate, setListUpdate] = useState(false);

  // Uso de  Metodos Mapeo de datos y estado de actualizacion
  useEffect(() => {
    mapeoDatos();
    setListUpdate(false);
  }, [listUpdate]);

  // Mapeo de Datos en Tabla GET
  const mapeoDatos = async () => {
    const res = await fetch("http://localhost:4000/api/rol", { mode: "cors" });
    const rols = await res.json();
    setRol(rols);
  }

  /*--------------------------------------------------------------Metodo Post Roles------------------------------------------------------------------------------------*/

  // Uso de estado y metodo 
  const [ru, setRu] = useState([]) 

  const handleChange = (e) => {
    setRu({
      ...ru,
      [e.target.name]: e.target.value,
    })
  }

  // Declaracion de variable
  let { Nombre_Rol, Estado_Rol } = ru

  const handleSubmit = () => {
  // validacion de datos
    if (Nombre_Rol === '' || Estado_Rol === '') {
      alert('todos los campos son obligatorios')
      return
    }

  //
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ru),
    }
    fetch('http://localhost:4000/api/rol', requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res))

  // Limpiar inputs de la tabla
    setRu({
      Nombre_Rol: '',
      Estado_Rol: '',
    })
  }

  /*-----------------------------------------------------------------------------------------------------------------------------------*/

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Modulo Prueba" />
          <Row>
            <Col sm>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Tabla de Roles
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
                                <i
                                  className="dripicons-alarm"
                                  style={{ width: "125px", height: "30px" }}
                                ></i>
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
            <Col sm>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Formulario - Crud</CardTitle>
                  <div className="form-row">
                    <div className="form-group col-sm">
                      <Form onSubmit={handleSubmit}>
                        <div className="row mb-4">
                          <Label
                            htmlFor="name_rol"
                            className="col-sm-3 col-form-label"
                          >
                            Nombre Rol
                          </Label>
                          <Col sm={9}>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Ingrese el Nombre del rol"
                              ru={Nombre_Rol}
                              name="Nombre_Rol"
                              onChange={handleChange}
                            />
                          </Col>
                        </div>
                        <div className="row mb-4">
                          <Label
                            htmlFor="status_rol"
                            className="col-sm-3 col-form-label"
                          >
                            Estado
                          </Label>
                          <Col sm={9}>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Ingrese el Estado del Rol"
                              ru={Estado_Rol}
                              name="Estado_Rol"
                              onChange={handleChange}
                            />
                          </Col>
                        </div>
                        <div className="row justify-content-end">
                          <Col sm={9}>
                            <div>
                              <Button
                                type="submit"
                                color="primary"
                                className="w-md"
                              >
                                Agregar
                              </Button>
                            </div>
                          </Col>
                        </div>
                      </Form>
                    </div>
                  </div>
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
