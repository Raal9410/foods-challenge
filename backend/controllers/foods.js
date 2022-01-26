const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getFoods = async (req, res) => {
  const foods = await convertCSVToJSON('meals.csv')
  console.log(foods)
}
