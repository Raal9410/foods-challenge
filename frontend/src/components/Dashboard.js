import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)

  useEffect(() => {
    fetchData()
  }, [])

  console.log(meals)
  console.log(tags)
  console.log(mealTypes)
  return <p>Meals App</p>
}

export default Dashboard
