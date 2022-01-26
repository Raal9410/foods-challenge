import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { useApi, Context } from '../context/context'
import Dashboard from '../components/Dashboard'

const App = () => {
  const routes = useRoutes([{ path: '/', element: <Dashboard /> }])
}

const AppRouter = () => {
  const data = useApi()
  return (
    <Context.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  )
}
