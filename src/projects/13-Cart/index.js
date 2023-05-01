import React from 'react'
import App from "./App";
import './index.css'
import { AppProvider } from './context/context'

function Index() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

export default Index;