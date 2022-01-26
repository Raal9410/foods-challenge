const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const { mealType: selectedMealType, tags: selectedTags } = req.query

  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))]
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  const filteredMeals = data.filter(meal => {
    const { mealType, tags } = meal

    console.log(mealType)
    console.log(tags)
  })

  res.send({
    tags,
    mealTypes,
    mealsg: data,
  })
}
