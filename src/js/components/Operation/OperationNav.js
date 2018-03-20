import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class OperationNav extends Component {
  render() {
    return (
      <div className="nav-operation row">
        <div className="col-4">
          <NavLink to='/operation' className="nav-link" activeClassName="active" onClick={this.hideMobile}>
            <span>1</span><p>¿Cuánto quieres cambiar?</p>
          </NavLink>
        </div>
        <div className="col-4">
          <NavLink to='/operation/data' className="nav-link" activeClassName="active" onClick={this.hideMobile}>
            <span>2</span><p>Confirmación de datos</p>
          </NavLink>
        </div>
        <div className="col-4">
          <NavLink to='/operation/confirm' className="nav-link" activeClassName="active" onClick={this.hideMobile}>
            <span>3</span><p>Transferencia de tu banca</p>
          </NavLink>
        </div>
      </div>
    )
  }
};

export default OperationNav;
