const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))] 
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  res.send({
    tags,
    mealTypes,
    foods: data,
  })
}
