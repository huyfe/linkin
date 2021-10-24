const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
// Nhúng model group
const Groups = require('../models/GroupsModel');

module.exports = {
    
     // Hiển thị tất cả group
    ShowAllGroups: function(req, res, next){
        Groups.find({})
            .then(groups => {
                res.json({ 
                    groups: mutipleMongooseToObject(groups)
                });
            })
            .catch(next);
    },

    //Tạo group
    CreateGroup: function(req, res, next) {
        const groups = new Groups(req.body);
        groups.save()
            .then(() => res.send('Tạo group thành công!'))
            .catch(next);
    },

    // Xóa group
    DeleteGroup: function(req, res, next) {
        Groups.delete({ _id: req.params.id })
            .then(() => res.send('!Xóa group thành công!'))
            .catch(next); // bắt lỗi
    }
}