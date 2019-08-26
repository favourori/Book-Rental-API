let express = require('express')
let router = express.Router()

let Author = require('../models/authors')



router.get('/', (req, res) => {
    Author.find().then(result => {
        res.status(200).send({
            success: true,
            result: result
        })
    }).catch(err => {
        res.status(400).send({
            success: false,
            result: err.message
        })
    })
})

router.post('/', (req, res) => {
    let author = new Author({
        name: req.body.name,
        website: req.body.website,
        bio: req.body.bio
    })

    author.save().then(result => {
        res.status(200).send({
            success: true,
            result: result
        })

    }).catch(err => {
        res.status(400).send({
            success: false,
            result: err.message
        })
    })
})



module.exports = router;