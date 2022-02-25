import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import {TransectionProvider} from './context/TransectionContext';

ReactDOM.render(
  <TransectionProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransectionProvider>  ,
  document.getElementById('root')
)
