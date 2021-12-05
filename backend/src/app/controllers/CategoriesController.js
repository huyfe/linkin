const Categories = require("../models/CategoriesModel");

module.exports = {
  //Hiện tất cả danh mục -> [GET]/
  async ShowAllCategories(req, res) {
    try {
      const categories = await Categories.find({});
      res.json(categories);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async ShowAllCategorieslimit(req, res) {
    try {
      const categories = await Categories.find({id_user_or_group: req.params.id, role: 0}).limit(8);
      res.json(categories);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Hiện tất cả danh mục của User -> [GET]/categories-user/:id
  async ShowAllByUser(req, res) {
    try {
      const categories = await Categories.find({id_user_or_group: req.params.id, role: 0});
      res.json(categories);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Hiện tất cả danh mục của Group -> [GET]/categories-group/:id
  async ShowAllByGroup(req, res) {
    try {
      const categories = await Categories.find({id_user_or_group: req.params.id, role: 1});
      res.json(categories);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Hiện các danh mục đã xóa mềm (Thùng rác) -> [GET]/show-trash
  async ShowTrash(req, res) {
    try {
      const categories = await Categories.findDeleted({});
      res.json(categories);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Hiện chi tiết danh mục theo Slug -> [GET]/:slug
  async ShowCategoryBySlug(req, res) {
    try {
      const category = await Categories.findOne({ slug: req.params.slug });
      res.json(category);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Hiện chi tiết danh mục theo ID
  async ShowCategoryByID(req, res) {
    try {
      const category = await Categories.findById(req.params.id);
      res.json(category);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Thêm danh mục -> [POST]/add-category
  async AddCategory(req, res) {
    try {
      const newCategory = req.body;
      const category = new Categories(newCategory);
      await category.save();
      res.json(category);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Cập nhật danh mục -> [PATCH]/:id/update
  async UpdateCategory(req, res) {
    try {
      await Categories.updateOne({ _id: req.params.id }, req.body);
      const category = await Categories.findById(req.params.id);
      res.json(category);
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Xóa mềm danh mục -> [DELETE]/:id/trash
  async TrashCategory(req, res, next) {
    try {
      await Categories.delete({ _id: req.params.id });
      res.send("Trash successfully!");
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Lấy lại các danh mục đã xóa -> [PATCH]/:id/restore
  RestoreCategory(req, res, next) {
    Categories.restore({ _id: req.params.id })
      .then(() => res.send("Restore successfully!"))
      .catch(next);
  },

  //Xóa vĩnh viễn danh mục -> [DELETE]/:id/destroy
  async DestroyCategory(req, res, next) {
    try {
      await Categories.deleteOne({ _id: req.params.id });
      res.send("Destroy successfully!");
    } catch (err) {
      res.json({ error: err });
    }
  },

  //Cập nhật Ghim cho danh mục
  async UpdatePin(req, res, next) {
    try {
      const category = await Categories.findById(req.params.id);
      await Categories.findByIdAndUpdate(req.params.id, {pin: !category.pin});
      const categoryUpdate = await Categories.findById(req.params.id);
      res.json(categoryUpdate);
    } catch (err) {
      res.json({ error: err });
    }
  },

};
