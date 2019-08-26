const express = require('express')
let router = express.Router();
let Genre = require('../models/genres')



router.get('/', (req, res) => {
    Genre.find().then(result => {
        res.status(200).send(
            {
                sucess: true,
                result: result
            }
        )
    }).catch(err => {
        res.status(400).send({
            sucess: false,
            result: err.message
        })
    })
})

router.post('/', (req, res) => {
    let new_genre = new Genre({
        name: req.body.name
    })

    new_genre.save().then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send("Could not create genre: ", err.message)
    })
})




module.exports = router;