const Categories = require('../models/CategoriesModel');

class CategoriesController {
    //Hiện tất cả danh mục
    async ShowAllcategories(req, res, next){
        await Categories.find({})
        .then(categories => res.json(categories))
        .catch(next);
    }

    //Hiện chi tiết danh mục theo Slug
    async ShowCategoryBySlug(req, res, next){
        await Categories.findOne({slug: req.params.slug})
        .then(category => res.json(category))
        .catch(next);
    }

    //Thêm danh mục
    async AddCategory(req, res, next){
        const newCategory = req.body;
        const category = new Categories(newCategory);
        console.log(category);
        await category.save()
        .then(() => res.json(category))
        .catch(err => res.send(err));
    }
}

module.exports = new CategoriesController();