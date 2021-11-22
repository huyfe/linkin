const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UsersController');

router.get('/', userController.ShowAllUsers);
router.get('/user-deleted', userController.TrashUser);
router.get('/:slug', userController.ShowUserBySlug);
router.get('/email/:email', userController.ShowUserByEmail);
router.post('/create-user', userController.Registers);
router.post('/checklogin', userController.Logins);
router.patch('/edit-user/:id', userController.UpdateUser);
router.patch('/edit-users/:id', userController.EditUser);
router.patch('/edit-infomation-user/:id', userController.EditInfomationUser);
router.delete('/lock-user/:id', userController.LockUser);
router.delete('/delete-user/:id', userController.DeleteUser);
router.patch('/restore-user/:id', userController.RestoreUser);

// follower/following: Array -> object {id, name, avatar} 

module.exports = router;
