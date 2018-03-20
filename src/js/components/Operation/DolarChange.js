import React, { Component } from 'react'

export class DolarChange extends Component {
  render() {
    return (
      <div className="content-operation row">
        <div className="change-type w-100">
          <div className="row">
            <div className="col-4">
              <p>Tipo de Cambio</p>
            </div>
            <div className="col-4">
              <p>Compra: <span className="buy-dolar">3.2460</span></p>
            </div>
            <div className="col-4">
              <p>Venta: <span className="sell-dolar">3.2840</span></p>
            </div>
          </div>
        </div>
        <div className="change-main">
          <h4>Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor Precio</p>
          <div className="exhange">
            <div className="have">
              <h3>Tengo</h3>
              <div className="box-exchange">
                <label htmlFor="">Nuevos Soles (PEN)</label>
                <input type="text"/>
              </div>
            </div>
          </div>
          <div className="switch">
            <i className="large material-icons">repeat</i>
          </div>
          <div className="exhange">
            <div className="have">
              <h3>Tengo</h3>
              <div className="box-exchange">
                <label htmlFor="">Nuevos Soles (PEN)</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <p>Ahorra S/2.20 respecto al banco</p>
          <p>Tipo de cambio vence en: <span>01:40</span>  </p>
          <button>Continuar</button>
        </div>
      </div>
    )
  }
}

export default DolarChange
