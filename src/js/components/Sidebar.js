import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';

export class Sidebar extends Component {
  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }
  render() {
    return (
      <div className='sidebar'>
        <Nav>
          <NavLink to='/operation' className="btn-green nav-link" onClick={this.hideMobile}>
            <i className="material-icons">add</i><span>Nueva Operación</span>
          </NavLink>
          <NavLink to='/dashboard' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">insert_chart</i><span>Principal</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">credit_card</i><span>Cuentas Bancarias</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">repeat</i><span>Operaciones Históricas</span>
          </NavLink>
          <NavLink to='/other' activeClassName="active" className="nav-link" onClick={this.hideMobile}>
            <i className="material-icons">person</i><span>Información Personal</span>
          </NavLink>
        </Nav> 
      </div>
    )
  }
}

export default Sidebar
