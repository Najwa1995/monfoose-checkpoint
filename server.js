
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = 5000
// connection database with server
const URI = "mongodb+srv://najwa:test@najwadh.myssope.mongodb.net/?retryWrites=true&w=majority"

// parse the data
app.use(express.json());
app.use('/contacts', require('./routes/contactRoutes'));

app.listen(port, (err) =>

    err ? console.log('err') : console.log('server is running on port 5000'))


mongoose.connect(URI, (err) =>
    err ? console.log('err') : console.log('database is connected '))