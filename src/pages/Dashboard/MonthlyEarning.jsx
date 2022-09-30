import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadial from "./ApexRadial"

const MonthlyEarning = () => {
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Niveles de Produccion</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">Septiembre</p>
              <h3>20,050  Fardos</h3>
              <p className="text-muted">
                <span className="text-success me-2">
                  {" "}
                  35% <i className="mdi mdi-arrow-up"></i>{" "}
                </span>{" "}
                Mes Anterior
              </p>
              <div className="mt-4">
                <Link
                  to=""
                  className="btn btn-primary  btn-sm"
                >
                  Ver detalles <i className="mdi mdi-arrow-right ms-1"></i>
                </Link>
              </div>
            </Col>
            <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial />
              </div>
            </Col>
          </Row>
          <p className="text-muted mb-0">
            
          </p>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarning
