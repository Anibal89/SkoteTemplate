import React from "react";
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
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input type="number"  placeholder="Codigo"/>
            </td>
            <td>
                <input type="text"  placeholder="Descripción"/>
            </td>
            <td>
                <input type="text" placeholder="Cantidad Sacos" />
            </td>
            <td>
                <input type="number" placeholder="Libras" />
            </td>
            <td>
                <input type="number" placeholder="Totales" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number"  placeholder="Codigo"/>
            </td>
            <td>
                <input type="text"  placeholder="Descripción"/>
            </td>
            <td>
                <input type="text" placeholder="Cantidad Sacos" />
            </td>
            <td>
                <input type="number" placeholder="Libras" />
            </td>
            <td>
                <input type="number" placeholder="Totales" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number"  placeholder="Codigo"/>
            </td>
            <td>
                <input type="text"  placeholder="Descripción"/>
            </td>
            <td>
                <input type="text" placeholder="Cantidad Sacos" />
            </td>
            <td>
                <input type="number" placeholder="Libras" />
            </td>
            <td>
                <input type="number" placeholder="Totales" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="number"  placeholder="Codigo"/>
            </td>
            <td>
                <input type="text"  placeholder="Descripción"/>
            </td>
            <td>
                <input type="text" placeholder="Cantidad Sacos" />
            </td>
            <td>
                <input type="number" placeholder="Libras" />
            </td>
            <td>
                <input type="number" placeholder="Totales" />
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
