import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export class DataTransfer extends Component {
  render() {
    return (
      <div className="content-operation row">
        <p className="w-75 mx-auto text-center mt-4">Tu operación con código N8608 ha sido registrada satisfactoriamente el dia 08/02 a las 23:00 hrs.</p>
        <p className="w-75 mx-auto text-center mt-2">Transfiere desde tu banca en línea a Rextie<br />Vence en 15:00</p>
        <div className="table-envio table-cuenta my-4">
          <table>
            <tbody>
              <tr className="bg-color-r-200">
                <td>Tipo de Operación</td>
                <td>Yo envío</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Compra</td>
                <td>1000.00 Dólares</td>
              </tr>
              <tr className="bg-color-r-200">
                <td>Banco de Destino</td>
                <td>Interbank</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Tipo de Cuenta</td>
                <td>Corriente Soles</td>
              </tr>
              <tr className="bg-color-r-200">
                <td>Número de Cuenta</td>
                <td>00316600300127342868</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Titular de la Cuenta</td>
                <td>Rextie S.A.C.</td>
              </tr>
              <tr className="bg-color-r-200">
                <td>R.U.C. del titular</td>
                <td>206010030013 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="w-75 mx-auto text-center mt-2">Envía el comprobante a pagos@rextie.com y te realizaremos la transacción a la sgte. cuenta</p>
        <div className="table-envio table-cuenta my-4">
          <table>
            <tbody>
              <tr className="bg-color-r-200">
                <td>Banco de Destino</td>
                <td>Interbank</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Cantidad a transferir</td>
                <td>$609.01 USD</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Tipo de Cambio</td>
                <td>3.2840</td>
              </tr>
              <tr className="bg-color-r-200">
                <td>Tipo de Cuenta</td>
                <td>Ahorro Dólares</td>
              </tr>
              <tr className="bg-color-gray">
                <td>Número de Cuenta</td>
                <td>003166003001273</td>
              </tr>
              <tr className="bg-color-r-200">
                <td>Titular de la Cuenta</td>
                <td>Elizabeth Alcalá</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="change-main w-100 text-center py-4">
          <button className="btn-green-rounded">Ir a la página principal</button>
        </div>
      </div>
    )
  }
};

export default DataTransfer;
