const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Users = require('../models/UsersModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

module.exports = {

    // Hiện tất cả tài khoản
    ShowAllUsers: function (req, res, next) {
        Users.find({})
            .then(users => {
                res.json({
                    users
                });
            })
            .catch(next);
    },

    // Hiện tài khoản qua slug
    ShowUserBySlug: function (req, res, next) {
        Users.findOne({ slug: req.params.slug })
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);
    },

    // Hiện tài khoản qua email
    ShowUserByEmail: function (req, res, next) {
        Users.findOne({ email: req.params.email })
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);
    },

    // Hiện tất cả tài khoản bị xóa
    TrashUser: function (req, res, next) {
        Users.findDeleted({email: req.params.email})
            .then(users => {
                res.json({
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    },

    // Đăng ký
    Registers: function (req, res, next) { // users.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11), null)
        const newUser = new Users(req.body);
        const salt = bcrypt.genSaltSync(saltRounds);

        newUser.name = req.body.name,
            newUser.email = req.body.email,
            newUser.address = req.body.address,
            newUser.hometown = req.body.hometown,
            newUser.phone = req.body.phone,
            newUser.birthday = req.body.birthday,
            newUser.created_date = req.body.created_date,
            newUser.image = req.body.image,
            newUser.role = req.body.role,
            newUser.public = req.body.public,
            newUser.password = bcrypt.hashSync(req.body.password, salt)

        newUser.save()
            .then(() => res.send('Create account successfully!'))
            .catch(next);
    },

    // Đăng nhập
    Logins: async function (req, res, next) { // users.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11), null)
        const { email, password } = req.body;
        try {
            const existingUser = await Users.findOne({ email });
            if (!existingUser) return res.status(200).json({ message: "Email error" });
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) return res.status(200).json({ message: "Pass error" });
            // Lấy token
            const Token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "token", { expiresIn: "1h" });
            res.status(200).json({ result: existingUser, Token });
        } catch (error) {
            res.status(500).json({ message: 'Error!' });
        }
    },

    // Cập nhật tài khoản
    UpdateUser: async function (req, res, next) {
        const newUser = req.body;
        try {
            const existingUsers = await Users.findOne({ _id: req.params.id });
            const isPasswordCorrect = await bcrypt.compare(newUser.oldpassword, existingUsers.password);
            if (isPasswordCorrect) {
                return res.status(200).json({ message: "password OK!" });
            } else {
                return res.status(200).json({ message: "password error!" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error!' });
        }
    },


    // Cập nhật nhật tài khoản
    EditUser: async function (req, res, next) {
        const newUser = new Users(req.body);
        const salt = bcrypt.genSaltSync(saltRounds);
        newUser.password = bcrypt.hashSync(req.body.newpassword, salt),
            Users.updateOne({ _id: req.params.id }, newUser)
                .then(() => res.send('Edit account successfully!'))
                .catch(next);
    },

    EditInfomationUser: async function (req, res, next) {
        const newUser = new Users(req.body);
            Users.updateOne({ _id: req.params.id }, newUser)
                .then(() => res.send('Edit account successfully!'))
                .catch(next);
    },

    // Xóa tài khoản
    DeleteUser: function (req, res, next) {
        Users.deleteOne({ _id: req.params.id })
            .then(() => res.send('Account deleted successfully!'))
            .catch(next); // bắt lỗi
    },

    // Xóa mềm tài khoản
    LockUser: function (req, res, next) {
        Users.delete({ _id: req.params.id })
            .then(() => res.send('Account locked successfully!'))
            .catch(next);
    },


    CheckRestore: async function (req, res, next) {
        const { password } = req.body;
        try{
            const existingUser = await Users.findDeleted({ email: req.params.email });
            console.log(existingUser);
            if (!existingUser) return res.status(200).json({ message: "Email error" });
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) return res.status(200).json({ message: "Pass error" });
            if (isPasswordCorrect) return res.status(200).json({ message: "Pass ok" });
        }catch{

        }
            
    },

    // Khôi phục tài khoản
    RestoreUser: function (req, res, next) {
        Users.restore({ email: req.params.email })
            .then(() => res.send('Your account has been unblock!'))
            .catch(next);
    }
}