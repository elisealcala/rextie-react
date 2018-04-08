import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

export class Sidebar extends Component {
  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }
  render() {
    const location = {
      pathname: '/operation/start'
    }
    return (
      <div className='sidebar'>
        <Nav>
          <NavLink to={location} className="btn-green nav-link" onClick={this.hideMobile}>
            <i className="material-icons">add</i><span>Nueva Operación</span>
          </NavLink>
          <NavLink to='/dashboard' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">insert_chart</i><span>Principal</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">credit_card</i><span>Cuentas Bancarias Personales</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">credit_card</i><span>Cuentas Bancarias de Terceros</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">repeat</i><span>Operaciones Históricas</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">person</i><span>Información Personal</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">credit_card</i><span>Cuentas Bancarias de Rextie</span>
          </NavLink>
        </Nav> 
      </div>
    )
  }
}

export default Sidebar
