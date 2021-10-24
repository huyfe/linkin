const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Users = require('../models/UsersModel');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
    // Show all accounts
    ShowAllUsers: async function(req, res, next){
        await Users.find({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    },

    // Show details of a product
    ShowUserBySlug: async function(req, res, next) {
        await Users.findOne({ slug: req.params.slug })
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);       
    },

    // Show all locked accounts
    TrashUser: async function(req, res, next){
        await Users.findDeleted({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users) 
                });
            })
            .catch(next); 
    },

    // Add the account
    Registers: async function(req, res, next) {
        const users = new Users(req.body);
        await users.save(users.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11), null))
            .then(() => res.send('Add account successfully!'))
            .catch(error => {});
    },
    
    // Edit the account
    UpdateUser: async function(req, res, next) {
        await Users.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Edit account successfully!'))
            .catch(next);
    },

    // Delete the account
    DeleteUser: async function(req, res, next) {
        await Users.deleteOne({ _id: req.params.id })
            .then(() => res.send('Account deleted successfully!'))
            .catch(next); // bắt lỗi
    },

    // Temporarily lock your account
    LockUser: async function(req, res, next) { 
        await Users.delete({ _id: req.params.id })
            .then(() => res.send('Account locked successfully!'))
            .catch(next); 
    },

    // Unblock the account
    RestoreUser: async function(req, res, next) { // PUT
        await Users.restore({ _id: req.params.id })
            .then(() => res.send('Your account has been unblock!'))
            .catch(next);
    }
}