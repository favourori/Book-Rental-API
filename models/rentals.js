let mongoose = require('mongoose')

let rental_schema = mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Customer" },
    book: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Book" },
    dateOut: { type: Date, default: Date.now },
    dateReturned: { type: Date },
    rentalFee: { type: Number, required: true }
})


let Rental = mongoose.model('Rental', rental_schema)



module.exports = Rental;