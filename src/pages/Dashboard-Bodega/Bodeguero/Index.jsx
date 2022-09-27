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

  document.title = "Add Product | Skote - Vite React Admin & Dashboard Template";

  const [selectedFiles, setselectedFiles] = useState([])

  const options = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" },
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
                  <CardTitle>Basic Information</CardTitle>
                  <CardSubtitle className="mb-4">
                    Fill all information below
                  </CardSubtitle>

                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="productname">Product Name</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturername">
                            Manufacturer Name
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
                            Manufacturer Brand
                          </Label>
                          <Input
                            id="manufacturerbrand"
                            name="manufacturerbrand"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="price">Price</Label>
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
                          <Label className="control-label">Category</Label>
                          <select className="form-control select2">
                            <option>Select</option>
                            <option value="FA">Fashion</option>
                            <option value="EL">Electronic</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label className="control-label">Features</Label>
                          <Select
                            classNamePrefix="select2-selection"
                            placeholder="Choose..."
                            title="Country"
                            options={options}
                            isMulti
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="productdesc">
                            Product Description
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
                        Save Changes
                      </Button>
                      <Button type="submit" color="secondary" className=" ">
                        Cancel
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