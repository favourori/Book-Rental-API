const express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.send('<br/><center><h1>Books Rental API v1.0.0</h1></center>')
})


module.exports = router;