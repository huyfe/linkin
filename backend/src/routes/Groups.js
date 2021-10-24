const express = require('express');
const router = express.Router();
const groupController = require('../app/controllers/GroupsController');


// Show all api table group
router.get('/', groupController.ShowAllGroups);
// Tạo group
router.post('/create-group', groupController.CreateGroup);

// Xóa group
router.delete('/delete-group/:id', groupController.DeleteGroup);

module.exports = router;
