import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'

import TagsCheckBoxes from './TagsChekboxes/index.js'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <TagsCheckBoxes tags={tags}/>
  )
}

export default Dashboard
