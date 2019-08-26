let express = require('express')
let router = express.Router()
let Customer = require('../models/customers')

//getting all customers
router.get('/', (req, res) => {
    Customer.find().then(result => {
        res.status(200).send({
            sucess: true,
            result: result
        })
    }).catch(err => {
        res.status(400).send({
            sucess: false,
            result: err.message
        })
    })
})

//creating a new customer
router.post('/', (req, res) => {
    let new_customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    })

    new_customer.save().then(result => {
        res.status(200).send({
            sucess: true,
            result: result
        })
    }).catch(err => {
        res.status(400).send({
            success: false,
            result: err.messageF
        })
    })
})





module.exports = router;