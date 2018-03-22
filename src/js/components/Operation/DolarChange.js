import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export class DolarChange extends Component {

  changeValues = () => {
    console.log('algo')
  }
  render() {
    return (
      <div className="content-operation row">
        <div className="change-type w-100">
          <div className="row">
            <div className="col-4">
              <p className="color-green">Tipo de Cambio</p>
            </div>
            <div className="col-4">
              <p className="color-blue">Compra: <span className="buy-dolar">3.2460</span></p>
            </div>
            <div className="col-4">
              <p className="color-blue">Venta: <span className="sell-dolar">3.2840</span></p>
            </div>
          </div>
        </div>
        <div className="change-main w-100 text-center py-4">
          <h4 className="mb-0">Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor Precio</p>
          <div className="container">
            <div className="row align-items-center">
              <div className="exchange col-5">
                <div className="have">
                  <h3>Tengo</h3>
                  <div className="box-exchange">
                    <p className="label py-2" htmlFor="">Nuevos Soles (PEN)</p>
                    <input className="py-2 px-4" type="text" />
                  </div>
                </div>
              </div>
              <div className="switch col-2" onClick={this.changeValues}>
                <i className="large material-icons">repeat</i>
              </div>
              <div className="exchange col-5">
                <div className="have">
                  <h3>Quiero</h3>
                  <div className="box-exchange">
                    <p className="label py-2" htmlFor="">Dólares (USD)</p>
                    <input className="py-2 px-4" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 mb-0">Ahorra S/2.20 respecto al banco</p>
          <p>Tipo de cambio vence en: <span>01:40</span>  </p>
          <button className="btn-green-rounded">Continuar</button>
        </div>
      </div>
    )
  }
}

export default DolarChange
