import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
