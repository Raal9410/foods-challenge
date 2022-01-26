import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../context/context'

import TagsCheckBoxes from '../TagsCheckboxes/index.js'
import MealTypeCheckboxes from '../MealTypesCheckboxes'
import SingleMeal from '../SingleMeal'

import { MealsGrid, FiltersContainer } from './styles'

const Dashboard = () => {
  const { meals, tags, mealTypes, fetchData } = useContext(Context)

  const [selectedTags, setSelectedTags] = useState([])
  const [selectedMealType, setSelectedMealType] = useState('')

  useEffect(() => {
    fetchData(selectedMealType, selectedTags)
    // eslint-disable-next-line
  }, [selectedMealType, selectedTags])

  const handleSelectedTags = e => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value])
    } else {
      setSelectedTags([...selectedTags.filter(tag => tag !== e.target.value)])
    }
  }

  const handleSelectedMealType = e => {
    if (e.target.checked) {
      setSelectedMealType(e.target.value)
    } else {
      setSelectedMealType('')
    }
  }

  return (
    <>
      <FiltersContainer>
        <TagsCheckBoxes tags={tags} handleSelectedTags={handleSelectedTags} />
        <MealTypeCheckboxes
          mealTypes={mealTypes}
          handleSelectedMealType={handleSelectedMealType}
          selectedMealType={selectedMealType}
        />
      </FiltersContainer>
      <MealsGrid>
        {meals.length > 0
          ? meals.map(meal => <SingleMeal key={meal.id} meal={meal} />)
          : 'We could not found a meal that adjusts to your search, we are working on adding more meals!'}
      </MealsGrid>
    </>
  )
}

export default Dashboard
