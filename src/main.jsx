import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Si quitamos <React.StrictMode></React.StrictMode> ya no hace el doble renderizado...
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
)
