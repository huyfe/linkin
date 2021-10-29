const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UsersController');

router.get('/', userController.ShowAllUsers);
router.get('/user-deleted', userController.TrashUser);
router.get('/:slug', userController.ShowUserBySlug);
router.post('/create-user', userController.Registers);
router.get('/checklogin/:email', userController.CheckLogin);
router.put('/edit-user/:id', userController.UpdateUser);
router.delete('/lock-user/:id', userController.LockUser);
router.delete('/delete-user/:id', userController.DeleteUser);
router.patch('/restore-user/:id', userController.RestoreUser);

// follower/following: Array -> object {id, name, avatar} 

module.exports = router;
