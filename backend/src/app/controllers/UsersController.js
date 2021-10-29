const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Users = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports = {

    // Show all accounts
    ShowAllUsers: function (req, res, next) {
        Users.find({})
            .then(users => {
                res.json({
                    users
                });
            })
            .catch(next);
    },

    // Show details of a product
    ShowUserBySlug: function (req, res, next) {
        Users.findOne({ slug: req.params.slug })
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);
    },

    // Show all locked accounts
    TrashUser: function (req, res, next) {
        Users.findDeleted({})
            .then(users => {
                res.json({
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    },

    // Add the account
    Registers: function (req, res, next) { // users.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11), null)
        const newUser = new Users(req.body);
        const salt = bcrypt.genSaltSync(saltRounds);

        newUser.name = req.body.name,
            newUser.email = req.body.email,
            newUser.birthday = req.body.birthday,
            newUser.created_date = req.body.created_date,
            newUser.accessToken = jwt.sign({ foo: newUser.name }, "token"),
            newUser.image = req.body.image,
            newUser.role = req.body.role,
            newUser.public = req.body.public,
            newUser.password = bcrypt.hashSync(req.body.password, salt)

        newUser.save()
            .then(() => res.send('Create account successfully!'))
            .catch(next);
    },

    // Edit the account
    UpdateUser: function (req, res, next) {
        Users.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Edit account successfully!'))
            .catch(next);
    },

    // Delete the account
    DeleteUser: function (req, res, next) {
        Users.deleteOne({ _id: req.params.id })
            .then(() => res.send('Account deleted successfully!'))
            .catch(next); // bắt lỗi
    },

    // Temporarily lock your account
    LockUser: function (req, res, next) {
        Users.delete({ _id: req.params.id })
            .then(() => res.send('Account locked successfully!'))
            .catch(next);
    },

    // Unblock the account
    RestoreUser: function (req, res, next) {
        Users.restore({ _id: req.params.id })
            .then(() => res.send('Your account has been unblock!'))
            .catch(next);
    },

    CheckLogin: function (req, res, next) {
        
        Users.findOne({ email: req.params.email })
            .then(users => {
                res.json(users);
            })
            .catch(next);
    },
}