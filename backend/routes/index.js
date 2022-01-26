const router = require('express').Router()
const { getAllData } = require('../controllers/getAllData')

router.get('/:mealType?/:tags?', getAllData)

module.exports = router
