const Categories = require("../models/CategoriesModel");

module.exports = {
  //Hiện tất cả danh mục -> [GET]/
  async ShowAllCategories(req, res, next) {
    await Categories.find({})
      .then((categories) => res.json(categories))
      .catch(next);
  },

  //Hiện các danh mục đã xóa mềm (Thùng rác) -> [GET]/show-trash
  async ShowTrash(req, res, next) {
    await Categories.findDeleted({})
      .then((categories) => res.json(categories))
      .catch(next);
  },

  //Hiện chi tiết danh mục theo Slug -> [GET]/:slug
  async ShowCategoryBySlug(req, res, next) {
    await Categories.findOne({ slug: req.params.slug })
      .then((category) => res.json(category))
      .catch(next);
  },

  //Hiện chi tiết danh mục theo ID
  async ShowCategoryByID(req, res, next) {
    await Categories.findById(req.params.id)
      .then((category) => res.json(category))
      .catch(next);
  },

  //Thêm danh mục -> [POST]/add-category
  async AddCategory(req, res, next) {
    const newCategory = req.body;
    const category = new Categories(newCategory);
    await category
      .save()
      .then(() => res.json(category))
      .catch((err) => res.send(err));
  },

  //Cập nhật danh mục -> [PUT]/:id/update
  async UpdateCategory(req, res, next) {
    await Categories.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.send("Update successfully!"))
      .catch(next);
  },

  //Xóa mềm danh mục -> [DELETE]/:id/trash
  async TrashCategory(req, res, next) {
    await Categories.delete({ _id: req.params.id })
      .then(() => res.send("Trash successfully!"))
      .catch(next);
  },

  //Lấy lại các danh mục đã xóa -> [PATCH]/:id/restore
  RestoreCategory(req, res, next) {
    Categories.restore({ _id: req.params.id })
      .then(() => res.send("Restore successfully!"))
      .catch(next);
  },

  //Xóa vĩnh viễn danh mục -> [DELETE]/:id/destroy
  async DestroyCategory(req, res, next){
    await Categories.deleteOne({ _id: req.params.id })
    .then(() => res.send("Destroy successfully!"))
    .catch(next);
  }
};
