import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePath } from '../../actions/actions';

@connect(
  state => ({
    tipo: state.showMe,
    origen: state.cuentaOrigen,
    transferir: state.currentNumber,
    destino: state.cuentaDestino,
    recibir: state.value,
    checkTab: state.checkTab
  }),
  dispatch => ({
    changePath: (path) => {
      dispatch(changePath(path))
    }
  })
)
export class DataTransfer extends Component {

  componentDidMount = () => {
    this.props.changePath(this.props.location.pathname)
  }

  render() {
    return (
      <div className="content-operation row">
        <p className="w-75 mx-auto text-center mt-4">Tu operación con código <span className="font-bold">N8608</span> ha sido registrada satisfactoriamente el dia <span className="font-bold">08/02</span> a las <span className="font-bold">23:00 hrs.</span>
          <br/>Vence en 15:00
        </p>
        <div className="container">
          <div className="row">
            <div className="table-envio table-cuenta col-md-6">
              <p className="text-center mt-2 color-blue"><span className="font-bold">Primero: </span>Transfiere desde tu banca en línea a <span className="font-bold">REXTIE</span></p>
              <table>
                <tbody>
                  <tr>
                    <td className="th-class text-left tb-blue">Tipo de Operación</td>
                    <td className="td-class text-left pl-1 tb-gray">{this.props.tipo == true ? 'Compra' : 'Venta'}</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Yo envío</td>
                    <td className="td-class text-left pl-1 tb-gray">{this.props.transferir} {this.props.tipo == true ? 'Soles' : 'Dólares'}</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Banco de Destino</td>
                    <td className="td-class text-left pl-1 tb-gray">Interbank</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Tipo de Cuenta</td>
                    <td className="td-class text-left pl-1 tb-gray">Corriente Soles</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Número de Cuenta</td>
                    <td className="td-class text-left pl-1 tb-gray">00316600300127342868</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Titular de la Cuenta</td>
                    <td className="td-class text-left pl-1 color-green font-bold tb-gray">Rextie S.A.C.</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">R.U.C. del titular</td>
                    <td className="td-class text-left pl-1 tb-gray">206010030013 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-envio table-cuenta col-md-6">
              <p className="text-center mt-2 color-blue"><span className="font-bold">Luego: </span>REXTIE te realizará la transferencia. </p>
              <br/>
              <table>
                <tbody>
                  <tr>
                    <td className="th-class text-left tb-blue">Banco de Destino</td>
                    <td className="td-class text-left pl-1 tb-gray">{this.props.destino.nombre}</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Cantidad a transferir</td>
                    <td className="td-class text-left pl-1 tb-gray">{this.props.recibir} {this.props.tipo == true ? 'USD' : 'PEN'}</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Tipo de Cambio</td>
                    <td className="td-class text-left pl-1 tb-gray">3.2840</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Tipo de Cuenta</td>
                    <td className="td-class text-left pl-1 tb-gray">Ahorro Dólares</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Número de Cuenta</td>
                    <td className="td-class text-left pl-1 tb-gray">{this.props.destino.número}</td>
                  </tr>
                  <tr>
                    <td className="th-class text-left tb-blue">Titular de la Cuenta</td>
                    <td className="td-class text-left pl-1 tb-gray">Elizabeth Alcalá</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='w-75 mx-auto text-center'><img src="../../img/conf.png" alt="" className="sads"/></div>
            <p className="w-75 mx-auto text-center mt-2">Envía el comprobante a <span className="font-bold color-green">pagos@rextie.com</span> y te realizaremos la transacción a la sgte. cuenta</p>
          </div>
        </div>
        <div className="change-main w-100 text-center py-4">
          <Link to="/" className="btn-green-rounded">Ir a la página principal</Link>
        </div>
      </div>
    )
  }
}

export default DataTransfer;
