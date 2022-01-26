import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/context'

import TagsCheckBoxes from './TagsChekboxes/index.js'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)

  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const handleSelectedTags = e => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value])
    } else {
      setSelectedTags([...selectedTags.filter(tag => tag !== e.target.value)])
    }
  }

  console.log(selectedTags)


  return (
    <TagsCheckBoxes tags={tags} handleSelectedTags={handleSelectedTags}/>
  )
}

export default Dashboard
