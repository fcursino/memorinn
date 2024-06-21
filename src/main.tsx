import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AuthProvider } from './hooks/AuthContext.tsx'
import App from './App.tsx'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)