let mongoose = require('mongoose')

let book_schema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
})


let Book = mongoose.model('Book', book_schema)



module.exports = Book;