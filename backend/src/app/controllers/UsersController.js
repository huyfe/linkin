const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Users = require('../models/UsersModel');

class UsersController {

    // Hiển thị tất cả tài khoản
    ShowAllUsers(req, res, next){
        Users.find({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users)
                });
            })
            .catch(next);
    }

    // Hiển thị chi tiết của 1 sản phẩm
    ShowUserBySlug(req, res, next) {
        Users.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);       
    }

    // Hiển thị tất cả tài khoản đã bị khóa
    TrashUser(req, res, next){
        Users.findDeleted({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users) 
                });
            })
            .catch(next); 
    }

    // Thêm tài khản
    Registers(req, res, next) {
        const users = new Users(req.body);
        users.save()
            .then(() => res.send('Thêm tài khoản thành công!'))
            .catch(error => {

            });
    }
    
    // Sửa tài khoản
    UpdateUser(req, res, next) {
        Users.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Sửa tài khoản thành công!'))
            .catch(next);
    }

    // Xóa tài khoản
    DeleteUser(req, res, next) {
        Users.deleteOne({ _id: req.params.id })
            .then(() => res.send('!Xóa tài khoản thành công!'))
            .catch(next); // bắt lỗi
    }

    // Khóa tài khoản tạm thời
    LockUser(req, res, next) { 
        Users.delete({ _id: req.params.id })
            .then(() => res.send('Khóa tài khoản thành công!'))
            .catch(next); 
    }

    // Bỏ khóa tài khoản
    RestoreUser(req, res, next) { // PUT
        Users.restore({ _id: req.params.id })
            .then(() => res.send('Tài khoản của bạn đã hết khóa!'))
            .catch(next);
    }
}

module.exports = new UsersController();