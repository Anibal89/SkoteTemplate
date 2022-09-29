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

  const [selectedFiles, setselectedFiles] = useState([])

  const options = [
    { value: "B1", label: "Bodega 1" },
    { value: "B2", label: "Bodega 2" },
    { value: "B3", label: "Bodega 3" },
    { value: "B4", label: "Bodega 4" },
    { value: "B5", label: "Bodega 5" },
    { value: "B6", label: "Bodega 6" },
  ]

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )

    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }
  return (
   
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Requerimientos</CardTitle>
                  <CardSubtitle className="mb-4">
                    Materias Primas / Materiales
                  </CardSubtitle>

                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="productname">Codigo del Producto</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturername">
                            Descripción del Producto
                          </Label>
                          <Input
                            id="manufacturername"
                            name="manufacturername"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturerbrand">
                            Sacos Entregados
                          </Label>
                          <Input
                            id="manufacturerbrand"
                            name="manufacturerbrand"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="price">Libras</Label>
                          <Input
                            id="price"
                            name="price"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label className="control-label">Supervisor</Label>
                          <select className="form-control select2">
                            <option value="Lz">Luis Zapeta</option>
                            <option value="Is">Israel De León</option>
                            <option value="Wil">Wilson Vásquez</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label className="control-label">Bodega</Label>
                          <Select
                            classNamePrefix="select2-selection"
                            placeholder="Buscar..."
                            title="bodegas"
                            options={options}
                           // isMulti
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="productdesc">
                            Detalles del producto
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary" className="btn ">
                        Grabar
                      </Button>
                      <Button type="submit" color="secondary" className=" ">
                        Cancelar
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index