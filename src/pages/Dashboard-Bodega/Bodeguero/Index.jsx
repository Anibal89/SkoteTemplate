import React from 'react'

import {
    Container,
  } from "reactstrap";

  //Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

const Index = () => {
  return (
    
     <div className="page-content">
        <Container fluid>
           
        <Breadcrumbs title="Tasks" breadcrumbItem="Modulo Prueba" />
        <h1>hola</h1>
            </Container></div>
    

  )
}

export default Index