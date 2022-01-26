const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const data = await convertCSVToJSON('meals.csv')
  console.log(foods)
}
