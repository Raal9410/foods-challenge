const router = require('express').Router()
import { convertCSVToJSON } from '../utils/getFormattedData'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
