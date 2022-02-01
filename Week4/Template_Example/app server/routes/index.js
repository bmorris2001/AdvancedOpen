const express = require("express")
const router = express.Router()
const ctrlPages = require('../controllers/pages')

//routes would go in this section

module.exports = router

router.get('/',ctrlPages.mainPage)
router.get('/pageTwo',ctrlPages.pageTwo)
router.get('/pageThree',ctrlPages.pageThree)
