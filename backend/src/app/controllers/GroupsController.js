
// Nhúng model group
const Groups = require('../models/GroupsModel');

module.exports = {
     
    // Hiển thị tất cả group -> [GET]/
    async ShowAllGroups(req, res, next) {
        await Groups.find({})
        .then((groups) => res.json(groups))
        .catch(next);
    },

    //Thêm group
    async CreateGroup(req, res, next) {
        const newGroup = req.body
        const groups = new Groups(newGroup);
        await groups.save()
            .then(() => res.send('Tạo group thành công!'))
            .catch(next);
    },

     // Cập nhật group
    async UpdateGroup (req, res, next) {
        await Groups.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Sửa group thành công!'))
            .catch(next);
    },

    // Xóa group vĩnh viễn
    async DeleteGroup (req, res, next) {
        await Groups.deleteOne({ _id: req.params.id })
            .then(() => res.send('!Xóa group thành công!'))
            .catch(next); // bắt lỗi
    },

     // Xóa group tạm thời -> [DELETE]/trash-group/:id
    async TrashGroup (req, res, next) {
        await Groups.delete({ _id: req.params.id })
            .then(() => res.send('!Xóa group tạm thời!'))
            .catch(next); // bắt lỗi
    },

    //Hiện các group đã xóa tạm thời -> [GET]/show-trash
    async ShowTrash(req, res, next) {
        await Groups.findDeleted({})
        .then((groups) => res.json(groups))
        .catch(next);
    },

      // Khôi phục group đã xóa tạm thời
    async RestoreGroup (req, res, next) {
        await Groups.restore({ _id: req.params.id })
            .then(() => res.send('!Khôi phục group đã xóa tạm thời thành công!'))
            .catch(next); // bắt lỗi
    }

}