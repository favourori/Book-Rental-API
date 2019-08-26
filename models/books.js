let mongoose = require('mongoose')

let book_schema = mongoose.Schema({
    title: { type: String, required: true },
    author
})


let Book = mongoose.model('Book', book_schema)



module.exports = Book;