var express = require('express')
var app = express()
var mongoose = require('mongoose')
var PersonModel = require('./models/UserModels')


//1) Install and setup mongoose:
var db = 'mongodb://127.0.0.1:27017/Person';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })

var port = 8080
app.listen(port, () => {
    console.log('App listen on port ' + port)
})
