import React from 'react'

import {
    Container,
} from  "reactstrap";

/******************************** */

const admin = () => {
  
  const [usuarios, setUsuarios]= React.useState([]);


  React.useEffect(() =>{
    function getData(){
      fetch("http://localhost:4000/api/materiales/")
      .then((res) => res.json())
      .then ((dato) => setUsuarios(dato) );

    }
    getData();
  }, [] );
  
  return (
    <div className="page-content">
        <Container fluid>
          <tr>
            <th>Codigo</th>
            <th>Descripción</th>
            <th>Existencia</th>
            <th>Bodega</th>

          </tr>
          
          {/* Mostrando en pantalla los datos de usuarios */}
          {usuarios && usuarios.map((item) =>
            <tr key={item.codigo_material}>
            <th>{item.codigo_material}</th>
            <td>{item.descripcion_material}</td>
            <td>{item.existencia_material}</td>
            <td>{item.bodega_material}</td>
              </tr>
              
          )}

        </Container>
    </div>
  )
}

export default admin