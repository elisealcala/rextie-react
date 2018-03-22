import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class UserData extends Component {
  render() {
    return (
      <div className="content-operation row">
        <div className="table-envio my-4">
          <table>
            <tbody>
              <tr className="bg-color-r-200">
                <th>Tipo de Operación</th>
                <th>Yo envío</th>
                <th>Yo recibo</th>
                <th>Tipo de cambio</th>
              </tr>
              <tr className="bg-color-white">
                <td>Compra</td>
                <td>1000.00 Dólares</td>
                <td>3462.00 Soles</td>
                <td>3.246</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="change-main w-100 text-center py-4">
          <h4 className="mb-4">Selecciona tus cuentas de origen y destino</h4>
          <div className="container">
            <div className="row align-items-center">
              <div className="exchange col-6">
                <div className="box-exchange">
                  <FormGroup className="text-left">
                    <Label className="mb-0" for="exampleSelect">Envío desde:</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Cuenta Interbank</option>
                      <option>Cuenta Scotiabank</option>
                      <option>Cuenta Bcp</option>
                    </Input>
                    <i className="material-icons">expand_more</i>
                  </FormGroup>
                </div>
              </div>
              <div className="exchange col-6">
                <div className="box-exchange">
                  <FormGroup className="text-left">
                    <Label className="mb-0" for="exampleSelect"> Recibo en:</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Cuenta Interbank</option>
                      <option>Cuenta Scotiabank</option>
                      <option>Cuenta Bcp</option>
                    </Input>
                    <i className="material-icons">expand_more</i>
                  </FormGroup>
                </div>
              </div>
              <p className="w-100 d-flex justify-content-center"><span>Agregar otra cuenta bancaria</span> <span className="circle-green"><i className="material-icons">add</i></span></p>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-5 pl-4 text-left">
                <FormGroup>
                  <Label className="mb-0" for="exampleEmail">Celular</Label>
                  <Input type="text" name="email" id="exampleEmail" />
                </FormGroup>
              </div>
              <div className="col-7">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Acepto los Términos y Condiciones
                  </Label>
                </FormGroup>
              </div>
            </div>
          </div>
          <p>Tipo de cambio vence en: <span>01:40</span></p>
          <button className="btn-white-rounded mr-3">Regresar</button>
          <button className="btn-green-rounded ml-3">Continuar</button>
        </div>
      </div>
    )
  }
};

export default UserData;
