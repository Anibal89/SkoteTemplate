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

  /*----------------------------------------------------------Metodo Get Roles--------------------------------------------------------------------------*/

  // Metodo Get del Crud
  const [rols, setRol] = useState([]);

  // Actualizacion de tabla
  const [listUpdate, setListUpdate] = useState(false);

  // Uso de  Metodos Mapeo de datos
  useEffect(() => {
    mapeoDatos();
    setListUpdate(false);
  }, [listUpdate]);

  // Mapeo de Datos en Tabla GET
  const mapeoDatos = async () => {
    const res = await fetch("http://localhost:4000/api/rol", { mode: "cors" });
    const rols = await res.json();
    setRol(rols);
  };

  /*------------------------------------------------------------------------------------------------------------------------------------*/

  const inpRow = [{ name: "", file: "" }];
  const [inputFields, setinputFields] = useState(inpRow);


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
            <Col sm>
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
                      <Form>
                        <div className="row mb-4">
                          <Label
                            htmlFor="horizontal-firstname-Input"
                            className="col-sm-3 col-form-label"
                          >
                            Nombre Rol
                          </Label>
                          <Col sm={9}>
                            <Input
                              type="text"
                              className="form-control"
                              id="horizontal-firstname-Input"
                              placeholder="Ingrese el Nombre del rol"
                            />
                          </Col>
                        </div>
                        <div className="row mb-4">
                          <Label
                            htmlFor="horizontal-email-Input"
                            className="col-sm-3 col-form-label"
                          >
                            Estado
                          </Label>
                          <Col sm={9}>
                            <Input
                              type="email"
                              className="form-control"
                              id="horizontal-email-Input"
                              placeholder="Ingrese el Estado del Rol"
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
