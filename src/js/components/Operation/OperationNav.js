import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({
    checkTab: state.checkTab
  })
)
export class OperationNav extends Component {

  data = () => {
    if (this.props.checkTab == '/operation/data') {
      return (<div className="nav-link active"><span className="bg-green">2</span><p>Confirma tus datos</p></div>)
    } else if (this.props.checkTab == '/operation/transfer') {
      return (<div className="nav-link"><span className="bg-green-light"><i className="material-icons">check</i> </span><p>Confirma tus datos</p></div>)
    } else {
      return (<div className="nav-link"><span>2</span><p>Confirma tus datos</p></div>)
    }
  }
  
  render() {
    return (
      <div className="nav-operation row">
        <div className="col-12 col-md-4 justify-content-center d-flex align-items-center">
          {this.props.checkTab == '/operation/start' ? <div className="nav-link active"><span className="bg-green">1</span><p>¿Cuánto quieres cambiar?</p></div> : <div className="nav-link"><span className="bg-green-light"><i className="material-icons">check</i></span> <p>¿Cuánto quieres cambiar?</p></div>}
        </div>
        <div className="col-12 col-md-4 justify-content-center d-flex align-items-center">
          {this.data()}
        </div>
        <div className="col-12 col-md-4 justify-content-center d-flex align-items-center">
          {this.props.checkTab == '/operation/transfer' ? <div className="nav-link active"><span className="bg-green">3</span><p>Transfiere desde tu banca</p></div> : <div className="nav-link"><span>3</span><p>Transfiere desde tu banca</p></div>}
        </div>
      </div>
    )
  }
}

export default OperationNav;
