let express = require('express')

let router = express.Router()
let User = require('../models/users')
let _ = require('lodash')


router.get('/', (req, res) => {
    User.find().then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.status(400).send(err.message)
    })
})

router.post('/', (req, res) => {
    User.findOne({ email: req.body.email }).then(result => {
        if (result) {
            res.status(400).send("User is already Registered")
        } else {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            user.save().then(result => {

                let info_to_display = _.pick(result, ["_id", "name", "email"])
                res.status(200).send(info_to_display)

            }).catch(err => {
                res.status(400).send(err.message)
            })
        }
    })
})



module.exports = router;
