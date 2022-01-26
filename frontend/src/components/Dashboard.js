import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/context'

import TagsCheckBoxes from './TagsChekboxes/index.js'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)

  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  console.log(selectedTags)


  return (
    <TagsCheckBoxes tags={tags} setSelectedTags={setSelectedTags}/>
  )
}

export default Dashboard
