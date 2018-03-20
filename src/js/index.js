import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter, Router, Switch, BrowserRouter } from 'react-router-dom';
const app = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
)