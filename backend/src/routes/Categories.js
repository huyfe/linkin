const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoriesController');

router.get('/show-trash', categoryController.ShowTrash);
router.get('/:slug', categoryController.ShowCategoryBySlug);
router.get('/categories-user/:id', categoryController.ShowAllByUser);
router.get('/categories-group/:id', categoryController.ShowAllByGroup);
// router.get('/:id/edit', categoryController.ShowCategoryByID);
router.post('/add-category', categoryController.AddCategory);
router.patch('/:id/update', categoryController.UpdateCategory);
router.delete('/:id/trash', categoryController.TrashCategory);
router.patch('/:id/restore', categoryController.RestoreCategory);
router.patch('/list-restore', categoryController.ListRestoreCategory);
router.delete('/:id/destroy', categoryController.DestroyCategory);
router.patch('/:id/pin', categoryController.UpdatePin);
router.patch('/:id/links/:idLink', categoryController.UpdateLinks);
router.get('/', categoryController.ShowAllCategories);
router.get('/limit/:id', categoryController.ShowAllCategorieslimit);

module.exports = router;
