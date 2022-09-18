const express = require('express');
const router = express.Router();
const User = require('../models/UserModels');


//ADD A NEW USER
router.post('/NewUser', (req, res) => {
    const newUser = new User(req.body)
    newUser
        .save()
        .then(() => res.send('Record saved'))
        .catch(err => res.status(400).json(err.message))

})
// ADD MULTIPLE USERS
var createManyUsers = function (arrayOfUsers, done) {
    User.create(arrayOfUsers, (err, data) => err ? console.log(err) : done(null, data));
};

router.post('/NewUsers', (req, res) => {
    createManyUsers(req.body, (err, data) => {
        err ? console.log(err) : res.send('Many Users created')
    })
})

//Search by name in db
router.get('/:name', (req, res) => {
    User.find({ name: req.params.name }, (err, data) => err ? console.log(err) : res.json(data))
})
//ADD FAVOURITE FOOD 
var findEditThenSave = function (UserId, done) {
    const itemToAdd = 'hamburger'
    const User = User.findById({ _id: UserId }, function (err, data) {
        if (err) {
            return done(err)
        }
        data.favoriteFoods.push(itemToAdd)
        data.save((err, data) => {
            if (err) {
                return done(err)
            }
            else {
                return done(null, data)
            }
        })
    })
}
router.put('/addFavourite/:id', (req, res) => {
    findEditThenSave(req.params.id, (err, data) => err ? console.log(err) : res.send('user updated'))
})

//   FUIND USER BY ID AND UPDATE AGE
router.put('/updateAge/:name', (req, res) => {
    User.findOneAndUpdate({ name: req.params.name }, { $set: { age: 20 } }, { new: true }, (err, data) =>
        err ? console.log(err) : res.json(data))
})
//DELETE USER BY ID
router.delete('/:UserID', (req, res) => {
    User.findByIdAndRemove(req.params.UserID, (err, data) => err ? console.log(err) : res.send('User is deleted'))
})
//DELETE MARRY
router.delete('/deletedName/:name', (req, res) => {
    User.remove({ name: req.params.name }, (err, data) => {
        err ? console.log(err) : res.send('all Users named Mary were deleted')
    })
})

module.exports = router