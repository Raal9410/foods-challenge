const router = require('express').Router()
const { getFoods } = require('../controllers/foods')
const { convertCSVToJSON } = require('../utils/getFormattedData')

/* GET home page. */
router.get('/', getFoods)

module.exports = router
