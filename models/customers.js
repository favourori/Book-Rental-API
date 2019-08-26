let mongoose = require('mongoose')


//customer Schema
let customerSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    isGold: { type: Boolean, default: false },
    phone: { type: String, require: true }
})

let Customer = mongoose.model('Customer', customerSchema)


module.exports = Customer;