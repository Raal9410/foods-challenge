const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const { mealType: selectedMealType, tags: selectedTags } = req.query

  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))]
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  const filteredMeals = data.filter(meal => {
    const { mealType, tags } = meal

    if (selectedMealType && !selectedTags) {
      return mealType === selectedMealType
    }
    if (!selectedMealType && selectedTags) {
      return tags.every(tag => selectedTags.indexOf(tag) >= 0)
    }
    if (selectedMealType && selectedTags) {
      return mealType === selectedMealType && tags.every(tag => selectedTags.indexOf(tag) >= 0)
    }
    else {
      return data
    }
  })

  res.send({
    tags,
    mealTypes,
    meals: filteredMeals,
  })
}
