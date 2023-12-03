import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './styles/Library.scss'
import { ReactLenis } from '@studio-freight/react-lenis'
import { BrowserRouter } from 'react-router-dom'
import Card from "./Components/Card.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root>
      <React.StrictMode>
        <BrowserRouter>
            <Card />
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </ReactLenis>
)
