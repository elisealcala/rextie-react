import React, { Component } from 'react'
import { Input, FormGroup, FormFeedback } from 'reactstrap'
import { connect } from 'react-redux';
import { convertDolar, exchange, changePath } from '../../actions/actions';
import { Link } from 'react-router-dom';

@connect(
  state => ({ 
    input: state.value,
    currentNumber: state.currentNumber,
    exchange: state.showMe,
    checkTab: state.checkTab
  }), 
  dispatch => ({ 
    handleChange: (e) => {
      const title = e.target.value
      dispatch(convertDolar(title))
    },
    handleClick: () => {
      dispatch(exchange())
    },
    changePath: (path) => {
      dispatch(changePath(path))
    }
  })
)
export class DolarChange extends Component {

  componentDidMount = () => {
    this.props.changePath(this.props.location.pathname)
  }

  render() {
    return (
      <div className="content-operation row">
        <div className="change-type w-100">
          <div className="container">
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
        </div>
        <div className="change-main w-100 text-center py-4">
          <h4 className="mb-0">Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor Precio</p>
          <div className="container">
            <div className="row align-items-center">
              <div className="exchange col-md-5 col-12">
                <div className="have">
                  <h3>Tengo</h3>
                  <div className="box-exchange">
                    <p className="label py-2" htmlFor="">
                      {this.props.exchange == true ? <span><img src="../../img/peru.png" alt="" /><span>Nuevos Soles (PEN)</span></span> : <span><img src="./img/united-states.png" alt="" /><span>Dólares (USD)</span></span>}
                    </p>
                    <FormGroup>
                      {this.props.currentNumber != '' ? <Input value={this.props.currentNumber} onChange={this.props.handleChange} className="py-2 px-4" type="text" autoFocus valid /> : <Input value={this.props.currentNumber} onChange={this.props.handleChange} className="py-2 px-4" type="text" autoFocus invalid />}
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="switch mx-auto" onClick={this.props.handleClick}><i className="large material-icons">repeat</i></div>
              </div>
              <div className="exchange col-md-5 col-12">
                <div className="have">
                  <h3>Quiero</h3>
                  <div className="box-exchange">
                    <p className="label py-2" htmlFor="">
                      {this.props.exchange == true ? <span><img src="../../img/united-states.png" alt="" /><span>Dólares (USD)</span></span> : <span><img src="./img/peru.png" alt="" /><span>Nuevos Soles (PEN)</span></span>}
                    </p>
                    <FormGroup>
                      <Input className="py-2 px-4 input-total" type="text" value={this.props.input} disabled/>
                    </FormGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 mb-0">Ahorra S/2.20 respecto al banco</p>
          <p>Tipo de cambio vence en: <span>01:40</span></p>
          { this.props.input != 0 ? <Link className="btn-green-rounded" to="/operation/data">Continuar</Link> : <span className="btn-disabled">Continuar</span> }
        </div>
      </div>
    )
  }
}

export default DolarChange
