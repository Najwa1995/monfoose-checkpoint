const express = require('express')
const router = express.Router()
const Contact = require('../models/ContactSchema')


//ADD A NEW USER @POST
router.post('/newcontact', (req, res) => {
    let newContact = new Contact(req.body)
    newContact.save((err, data) => {
        err ? console.log(err) : res.send('contact was used')
    })
})
// GET contacts @GET
router.get('/', (req, res) => {
    Contact.find({}, (req, data) => {
        err ? console.log(err) : res.json(data)
    })

})

// get contacts by ID@get
router.get('/:id', (req, res) => {
    Contact.find({ _id: req.params.id }, (err, data) => {
        err ? console.log(err) : res.json(data)
    })
})
// delete contact by id@Delete

router.delete('/deletecontact/:id', (req, res) => {
    Contact.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
        err ? console.log(err) : res.json({ msg: 'najwa was deleted' })
    })
})
//update contact by id :@put
router.put('/updatecontact/:id', (req, res) => {
    Contact.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, (err, msg) => {
        err ? console.log(err) : res.json({ msg: 'najwa was update ' })
    })
})



module.exports = router
