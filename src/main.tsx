import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthProvider } from './contexts/AuthContext'
import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
