import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Bienvenida <span>Elizabeth</span></p>
        <p>Sus datos han sido validados.</p>
        <p>Si desea operar haga click en <a href="/operation">Nueva Operación</a></p>
      </div>
    )
  }
}

export default Dashboard
