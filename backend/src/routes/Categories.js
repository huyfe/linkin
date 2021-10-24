const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoriesController');

router.get('/show-trash', categoryController.ShowTrash);
router.get('/:slug', categoryController.ShowCategoryBySlug);
// router.get('/:id/edit', categoryController.ShowCategoryByID);
router.post('/add-category', categoryController.AddCategory);
router.put('/:id/update', categoryController.UpdateCategory);
router.delete('/:id/trash', categoryController.TrashCategory);
router.patch('/:id/restore', categoryController.RestoreCategory);
router.delete('/:id/destroy', categoryController.DestroyCategory)
router.get('/', categoryController.ShowAllCategories);

module.exports = router;