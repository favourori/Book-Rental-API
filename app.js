const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//=====================================
//IMPORTING ALL ROUTES HERE
//=====================================
const genres_route = require('./routes/genres')
const home_route = require('./routes/index')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//=====================================
//SETTING UP ROUTES
//=====================================
app.use('/api/genres', genres_route)
app.use('/api', home_route)


//=====================================
//SPINNING UP THE DEVELOPMENT SERVER
//=====================================
const port = 3000 || process.env.PORT
app.listen(port, () => console.log(`App is running on port ${port}`))