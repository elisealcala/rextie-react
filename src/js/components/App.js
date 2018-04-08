import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard';
import Operation from './Operation/Operation'
import Footer from './Footer'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/operation" name="Operación" component={Operation} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
  