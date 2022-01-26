const router = require('express').Router()
const { convertCSVToJSON } = require('../utils/getFormattedData')

/* GET home page. */
router.get('/',  async function (req, res, next) {
  const foods = await convertCSVToJSON('meals.csv')
  console.log(foods)
})

module.exports = router
