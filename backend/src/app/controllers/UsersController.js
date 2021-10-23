const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Users = require('../models/UsersModel');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
    // Show all accounts
    ShowAllUsers: function(req, res, next){
        Users.find({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    },

    // Show details of a product
    ShowUserBySlug: function(req, res, next) {
        Users.findOne({ slug: req.params.slug })
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);       
    },

    // Show all locked accounts
    TrashUser: function(req, res, next){
        Users.findDeleted({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users) 
                });
            })
            .catch(next); 
    },

    // Add the account
    Registers: function(req, res, next) {
        const users = new Users(req.body);
        users.save(users.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11), null))
            .then(() => res.send('Add account successfully!'))
            .catch(error => {});
    },
    
    // Edit the account
    UpdateUser: function(req, res, next) {
        Users.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Edit account successfully!'))
            .catch(next);
    },

    // Delete the account
    DeleteUser: function(req, res, next) {
        Users.deleteOne({ _id: req.params.id })
            .then(() => res.send('Account deleted successfully!'))
            .catch(next); // bắt lỗi
    },

    // Temporarily lock your account
    LockUser: function(req, res, next) { 
        Users.delete({ _id: req.params.id })
            .then(() => res.send('Account locked successfully!'))
            .catch(next); 
    },

    // Unblock the account
    RestoreUser: function(req, res, next) { // PUT
        Users.restore({ _id: req.params.id })
            .then(() => res.send('Your account has been unblock!'))
            .catch(next);
    }
}