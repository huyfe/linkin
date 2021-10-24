const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoriesController');

router.get('/:slug', categoryController.ShowCategoryBySlug);
router.post('/add-category', categoryController.AddCategory);
router.get('/', categoryController.ShowAllcategories);

module.exports = router;
