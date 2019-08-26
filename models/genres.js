let mongoose = require('mongoose')



//creating the Genres schema
let genreSchema = mongoose.Schema({
    name: { type: String, required: true }
})

//Modelling the schema
let Genre = mongoose.model('Genre', genreSchema)


module.exports = Genre;