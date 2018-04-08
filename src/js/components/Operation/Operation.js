import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import OperationNav from './OperationNav';
import DolarChange from './DolarChange';
import UserData from './UserData';
import DataTransfer from './DataTransfer';

export class Operation extends Component {
  render() {
    return (
      <div className="operation-main">
        <OperationNav />
        <Switch>
          <Route path="/operation/start" name="Cambio" component={DolarChange} />
          <Route path="/operation/data" name="Datos" component={UserData} />
          <Route path="/operation/transfer" name="Transferencia" component={DataTransfer} />
        </Switch>
      </div>
    )
  }
}

export default Operation
