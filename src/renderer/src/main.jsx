import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
     <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
)
