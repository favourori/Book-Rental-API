const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let mongoose = require('mongoose')

mongoose.connect('mongodb://favourtheo:1A2b3c--@ds353457.mlab.com:53457/books_rental', { useNewUrlParser: true })
    .then(() => {
        console.log("connected to MongoDB")
    }).catch(err => {
        console.log("Could not connect to MongoDB: ", err.message)
    })

mongoose.set('useCreateIndex', true);



//=====================================
//IMPORTING ALL ROUTES HERE
//=====================================
const genres_route = require('./routes/genres')
const home_route = require('./routes/index')
const customer_route = require('./routes/customers')
const author_route = require('./routes/authors')
const book_route = require('./routes/books')
const rental_route = require('./routes/rentals')
const user_route = require('./routes/users')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//=====================================
//SETTING UP ROUTES
//=====================================
app.use('/api/genres', genres_route)
app.use('/api', home_route)
app.use('/api/customers', customer_route)
app.use('/api/authors', author_route)
app.use('/api/books', book_route)
app.use('/api/rentals', rental_route)
app.use('/api/users', user_route)


//=====================================
//SPINNING UP THE DEVELOPMENT SERVER
//=====================================
const port = 3000 || process.env.PORT
app.listen(port, () => console.log(`App is running on port ${port}`))