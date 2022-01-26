import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { useAPI, Context } from '../context/context'
import Dashboard from '../components/Dashboard'

const App = () => {
  const routes = useRoutes([{ path: '/', element: <Dashboard /> }])
  return routes
}

const AppRouter = () => {
  const data = useAPI()
  return (
    <Context.Provider value={data}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  )
}

export default AppRouter
