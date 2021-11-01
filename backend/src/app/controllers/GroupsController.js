
// Nhúng model group
const Groups = require('../models/GroupsModel');

module.exports = {
     
    // Hiển thị tất cả group -> [GET]/
    async ShowAllGroups(req, res) {
        try {
          const groups = await Groups.find({});
          res.json(groups);
        } catch (err) {
          res.json({ error: err });
        }
      },

    //Thêm group
    async CreateGroup(req, res) {
        try {
            const newGroup = req.body
            const groups = new Groups(newGroup);
            await groups.save()
            res.send('Tạo group thành công!');
        }catch (err) {
            res.json({ error: err });
          }
    },

     // Cập nhật group
    async UpdateGroup (req, res) {
        try {
            await Groups.updateOne({ _id: req.params.id }, req.body);
            res.send('Sửa group thành công!');
        }catch (err) {
            res.json({ error: err });
        }
    },

    // Xóa group vĩnh viễn
    async DeleteGroup (req, res) {
        try {
            await Groups.deleteOne({ _id: req.params.id });
            res.send('!Xóa group thành công!');
        }catch (err) {
            res.json({ error: err }); // bắt lỗi
        }
    },

     // Xóa group tạm thời -> [DELETE]/trash-group/:id
    async TrashGroup (req, res) {
        try {
            await Groups.delete({ _id: req.params.id })
            res.send('!Xóa group tạm thời!')
        }catch (err) {
            res.json({ error: err }); // bắt lỗi
        }
    },

    //Hiện các group đã xóa tạm thời -> [GET]/show-trash
    async ShowTrash(req, res) {
        try {
          const groups = await Groups.findDeleted({});
          res.json(groups);
        } catch (err) {
          res.json({ error: err });
        }
      },

      // Khôi phục group đã xóa tạm thời
    async RestoreGroup (req, res) {
        try {
            await Groups.restore({ _id: req.params.id })
            res.send('!Khôi phục group đã xóa tạm thời thành công!');
        }catch (err) {
            res.json({ error: err }); // bắt lỗi
        }
    }
}