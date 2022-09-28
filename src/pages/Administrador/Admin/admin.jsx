import React from 'react'

import {
    Container,
} from  "reactstrap";

/******************************** */

const admin = () => {
  
  const [usuarios, setUsuarios]= React.useState([]);


  React.useEffect(() =>{
    function getData(){
      fetch("http://localhost:4000/api/rol")
      .then((res) => res.json())
      .then ((dato) => setUsuarios(dato) );

    }
    getData();
  }, [] );
  
  return (
    <div className="page-content">
        <Container fluid>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>

          </tr>
          
          {/* Mostrando en pantalla los datos de usuarios */}
          {usuarios && usuarios.map((item) =>
            <tr key={item.Id_Rol}>
            <th>{item.Id_Rol}</th>
            <td>{item.Nombre_Rol}</td>
            <td>{item.Estado_Rol}</td>
          
              </tr>

            
          )}

        </Container>
    </div>
  )
}

export default admin