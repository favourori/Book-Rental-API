let express = require('express')
let router = express.Router()

let Rental = require('../models/rentals')


router.get('/', (req, res) => {
    Rental.find().populate("customer book").sort('-dateOut').then(result => {
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

//create a rental

router.post('/', (req, res) => {

    let rental = new Rental({
        customer: req.body.customer,
        rentalFee: req.body.rentalFee,
        book: req.body.book
    })


    rental.save().then(result => {
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