import React from 'react'

import { Meal, TagsContainer } from './styles'

const SingleMeal = ({ meal }) => (
  <Meal>
    <p>{meal.title}</p>
    Description:
    <p>{meal.description}</p>
    <img src={meal.img} alt={meal.title} />
    <p>{meal.mealType}</p>
    <TagsContainer>
    {meal.tags.map(tag => (
      <p key={tag}>{tag}</p>
    ))}
    </TagsContainer>
    <p>{meal.price}</p>
    <p>{meal.chef}</p>
  </Meal>
)

export default SingleMeal
