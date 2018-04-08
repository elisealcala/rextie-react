import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store'
import App from './components/App'
import { HashRouter, BrowserRouter } from 'react-router-dom';
import '../scss/index.scss'

const app = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/es">
      <App />
    </HashRouter>
  </Provider>,
  app
)