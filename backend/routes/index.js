const router = require('express').Router()
const { getAllData } = require('../controllers/getAllData')

router.get('/', getAllData)

module.exports = router
