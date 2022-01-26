import React from 'react'

const MealTypeCheckboxes = ({ mealTypes, handleSelectedMealType, selectedMealType }) => {
  return (
    <div>
      {mealTypes.map(e => (
        <div key={e}>
          <label>{e}</label>
          <input
            type="checkbox"
            value={e}
            name={e}
            checked={selectedMealType === e}
            onChange={e => handleSelectedMealType(e)}
          />
        </div>
      ))}
    </div>
  )
}

export default MealTypeCheckboxes
