import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)
  return (
    <p>Meals App</p>
  )
}

export default Dashboard
