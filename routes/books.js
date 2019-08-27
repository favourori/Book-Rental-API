let express = require('express')
let router = express.Router()

let Book = require('../models/books')


router.get('/', (req, res) => {
    Book.find().populate('author genre').then(result => {
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
    let book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })

    book.save().then(result => {
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