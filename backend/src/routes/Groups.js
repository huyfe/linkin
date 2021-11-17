const express = require('express');
const router = express.Router();
const groupController = require('../app/controllers/GroupsController');


// Tạo group mới -> [POST]/create-group
router.post('/create-group', groupController.CreateGroup);

// show group by slug
router.get('/:slug', groupController.ShowGroupBySlug);
// hiện chi tiết group the id
// router.get('/group/:id', groupController.ShowGroupByID);

// Cập nhật group  -> [PUT]/update-group/:id
router.put('/update-group/:id', groupController.UpdateGroup);

// Xóa group tạm thời  -> [DELETE]/trash-group/:id
router.delete('/trash-group/:id', groupController.TrashGroup);

// Khôi phục group đã xóa tạm thời -> [PATCH]/restore-group/:id
router.patch('/restore-group/:id', groupController.RestoreGroup);

//Hiện các group đã xóa tạm thời -> [GET]/show-trash
router.get('/show-trash', groupController.ShowTrash);

// Xóa vĩnh viễn group -> [DELETE]/trash-group/:id
router.delete('/delete-group/:id', groupController.DeleteGroup);

// Show tất cả group
router.get('/', groupController.ShowAllGroups);

module.exports = router;
