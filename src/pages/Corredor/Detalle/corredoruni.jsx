import React, {useState} from "react";



import {
    Container,
  } from "reactstrap";

const CorredorUni = () => {
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <div>
            <h4>Requisición de Materias Primas y Materiales</h4>
            <label htmlFor="No-Maquina">No. Máquina</label>
            <input type="text" />
        <table class="table table-responsive">
    <thead>
        <tr>
            <th>Codigo Material</th>
            <th>Nombre Material</th>
            <th>Sacos Entregado</th>
            <th>Cantidad en Libras</th>
            <th>Total en Libras</th>
            <th>Existencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number" />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="text"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
            <td>
                <input type="number"  />
            </td>
        </tr>
        <br />
        <br />
        <tr>
            <th>Solicitado por</th>
            <th>Entregado Por</th>
        </tr>
        <tr>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <button className="GrabarRequi">Grabar</button>
            </td>
        </tr>
        
    </tbody>
</table>
        </div>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default CorredorUni;
