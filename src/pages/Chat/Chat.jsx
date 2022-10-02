import React,{Fragment} from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Input,
    Label,
    Button,
    Form,
  } from "reactstrap";

import Breadcrumbs from "/src/components/Common/Breadcrumb";

const Chat = () => {
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Inicio" breadcrumbItem="Modulo Usuario" />
          <Row sm>
            <Col sm>
              <Card>
                <CardBody>
                  <CardTitle> <h5>Formulario 1</h5></CardTitle>
                  <Form>
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
                              name="Nombre_Rol"
                         
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
                              name="Estado_Rol"
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
                </CardBody>
              </Card>
            </Col>
            <Col sm>
            <Card>
                <CardBody>
                  <CardTitle> <h5>Formulario 2</h5></CardTitle>
                  <Form>
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
                              name="Nombre_Rol"
                         
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
                              name="Estado_Rol"
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
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row sm>
            <Col sm>
            <Card>
                <CardBody>
                  <CardTitle> <h5>Formulario 3</h5></CardTitle>
                      <table class="table">
      <thead class="table-info">
      <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>twitter</td>
      <td>twitter</td>
    </tr>
      </tbody>
    </table>
                </CardBody>
              </Card>
            </Col>
            <Col sm>
            <Card>
                <CardBody>
                  <CardTitle> <h5>Formulario 4</h5></CardTitle>
                  <table class="table">
      <thead class="table-dark">
      <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>twitter</td>
      <td>twitter</td>
    </tr>
      </tbody>
    </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
    </div>
    </Fragment>
  )
}

export default Chat
