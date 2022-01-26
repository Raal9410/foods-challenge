const { convertCSVToJSON } = require('../utils/getFormattedData')

exports.getAllData = async (req, res) => {
  const {mealType, tags: queryTags} = req.query
  console.log(mealType, queryTags)
  const data = await convertCSVToJSON('meals.csv')

  const tags = [...new Set([].concat(...data.map(e => e.tags)))] 
  const mealTypes = [...new Set([].concat(...data.map(e => e.mealType)))]

  res.send({
    tags,
    mealTypes,
    mealsg: data,
  })
}
