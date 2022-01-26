import React from 'react'

const MealTypeCheckboxes = ({ mealTypes, handleSelectedTags }) => {
  return (
    <div>
      {mealTypes.map(e => (
        <div key={e}>
          <label>{e}</label>
          <input type="checkbox" value={e} name={e}  />
        </div>
      ))}
    </div>
  )
}

export default MealTypeCheckboxes
