import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import OperationNav from './OperationNav';
import DolarChange from './DolarChange'

export class Operation extends Component {
  render() {
    return (
      <div className="operation-main">
        <OperationNav />
        <Switch>
          <Route path="/operation" name="/inicio" component={DolarChange} />
        </Switch>
      </div>
    )
  }
}

export default Operation
