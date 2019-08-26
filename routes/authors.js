let express = require('express')
let router = express.Router()

let Author = require('../models/authors')



router.get('/', (req, res) => {
    Author.find().then(result => {
        res.status(200).send({

        })
    })
})



module.exports = router;