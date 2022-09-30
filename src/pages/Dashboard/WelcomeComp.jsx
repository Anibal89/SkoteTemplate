import React from "react"

import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import avatar1 from "../../assets/images/users/avatar-1.jpg"
import profileImg from "../../assets/images/profile-img.png"

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <div className="bg-primary bg-soft">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Bienvenido!</h5>


              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src="data:image/jpeg;base64,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" alt="IMGUNI" className="img-fluid" />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">Liz sas</h5>
              <p className="text-muted mb-0 text-truncate">Administrador/a</p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="6">
                    <h5 className="font-size-15">8</h5>
                    <p className="text-muted mb-0">Bodegas</p>
                  </Col>
                  <Col xs="6">
                    <h5 className="font-size-15">10,050</h5>
                    <p className="text-muted mb-0">Cantidad Bobinas</p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link
                    to=""
                    className="btn btn-primary  btn-sm"
                  >
                    Ver Perfil <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default WelcomeComp
