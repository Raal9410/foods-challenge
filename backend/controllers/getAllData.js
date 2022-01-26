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
      return tags.some(tag => selectedTags.indexOf(tag) >= 0)
    }
    if (selectedMealType && selectedTags) {
      return mealType === selectedMealType && tags.some(tag => selectedTags.indexOf(tag) >= 0)
    }
  })

  console.log(filteredMeals)

  res.send({
    tags,
    mealTypes,
    mealsg: data,
  })
}
