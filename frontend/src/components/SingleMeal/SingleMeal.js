import React from 'react'

const SingleMeal = ({ meal }) => (
  <div>
    <p>{meal.title}</p>
    <p>{meal.description}</p>
    <img src={meal.img} alt={meal.title} />
    <p>{meal.mealType}</p>
    {meal.tags.map(tag => (
      <p key={tag}>{tag}</p>
    ))}
    <p>{meal.price}</p>
    <p>{meal.chef}</p>
  </div>
)

export default SingleMeal
