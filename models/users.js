let mongoose = require('mongoose')


//customer Schema
let user_schema = mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true }
})

let User = mongoose.model('User', user_schema)


module.exports = User;