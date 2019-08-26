let mongoose = require('mongoose')

let author_schema = mongoose.Schema({
    name: { type: String, required: true },
    website: { type: String, required: true },
    bio: { type: String, required: true }
})


let Author = mongoose.model('Author', author_schema)



module.exports = Author;