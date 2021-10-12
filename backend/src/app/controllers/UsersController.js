const { mutipleMongooseToObject } = require('../../util/mongoose');
const passport = require('passport');
const Users = require('../models/UsersModel');

passport.serializeUser(function(User, cb){
    cb(null, User.id);
})

class UsersController {
    ShowAllUsers(req, res, next){
        Users.find({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    }
}

module.exports = new UsersController();