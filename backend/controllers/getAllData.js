const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const { mealType: selectedMealType, tags: selectedTags } = req.query

  console.log(selectedMealType, selectedTags)

  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))]
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  res.send({
    tags,
    mealTypes,
    mealsg: data,
  })
}
