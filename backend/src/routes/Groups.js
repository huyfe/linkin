const express = require('express');
const router = express.Router();
const groupController = require('../app/controllers/GroupsController');

router.get('/', groupController.ShowAllGroups);

module.exports = router;
