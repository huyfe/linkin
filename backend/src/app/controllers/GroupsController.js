const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
// Nhúng model group

const Groups = require('../models/GroupsModel');
class GroupsController {
    // Hiển thị tất cả group
    ShowAllGroups(req, res, next){
        Groups.find({})
            .then(groups => {
                res.json({ 
                    groups: mutipleMongooseToObject(groups)
                });
            })
            .catch(next);
    }



     // Xóa group
    DeleteGroup(req, res, next) {
        Groups.delete({ _id: req.params.id })
            .then(() => res.send('!Xóa group thành công!'))
            .catch(next); // bắt lỗi
    }
}

module.exports = new GroupsController();