const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const { mealType: selectedMealType, tags: selectedTags } = req.query

  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))]
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  const filteredMeals =
    !selectedMealType && !selectedTags
      ? data
      : data.filter(meal => {
          const { mealType, tags } = meal

          if (selectedMealType && !selectedTags) {
            return mealType === selectedMealType
          }
          if (!selectedMealType && selectedTags) {
            return selectedTags.split(',').every(tag => tags.includes(tag))
          }
          if (selectedMealType && selectedTags) {
            return mealType === selectedMealType && selectedTags.split(',').every(tag => tags.includes(tag))
          }
        })

  res.send({
    tags,
    mealTypes,
    meals: filteredMeals,
  })
}
