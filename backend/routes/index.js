const router = require('express').Router()
const { getFoods } = require('../controllers/foods')

router.get('/', getFoods)

module.exports = router
