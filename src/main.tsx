import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AuthProvider } from './hooks/AuthContext.tsx'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
)