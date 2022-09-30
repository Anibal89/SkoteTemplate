import React,{Fragment} from 'react'
import {
    Container,
  } from "reactstrap";

import Breadcrumbs from "/src/components/Common/Breadcrumb";

const Chat = () => {
  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Inicio" breadcrumbItem="Modulo Usuario" />
      </Container>
    </div>
    </Fragment>
  )
}

export default Chat
