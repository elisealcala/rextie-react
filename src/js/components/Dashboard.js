import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <div className="welcome">
        <p>Bienvenida <span>Elizabeth</span></p>
        <p>Sus datos han sido validados.</p>
        <p>Si desea operar haga click en <Link to="/operation/start">Nueva Operación</Link></p>
      </div>
    )
  }
}

export default Dashboard
