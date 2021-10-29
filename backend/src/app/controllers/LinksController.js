
// Nhúng model link
const Links = require('../models/LinksModel');


// Import socket from index.js


module.exports = {
    //Hiện tất cả links -> [GET]/
    async ShowAllLinks(req, res, next) {
        await Links.find({})
            .then((links) => res.json(links))
            .catch(next);
    },

    //Hiện các link đã xóa mềm (Thùng rác) -> [GET]/show-trash
    async ShowTrash(req, res, next) {
        await Links.findDeleted({})
            .then((links) => res.json(links))
            .catch(next);
    },

    //Hiện chi tiết link theo ID
    async ShowLinkByID(req, res, next) {
        await Links.findById(req.params.id)
            .then((links) => res.json(links))
            .catch(next);
    },

    //Thêm link -> [POST]/add-link
    async AddLink(req, res, next) {
        const newLink = req.body;
        const link = new Categories(newLink);
        await link
            .save()
            .then(() => res.json(link))
            .catch((err) => res.send(err));
    },

    //Cập nhật danh mục -> [PUT]/:id/update
    async UpdateLink(req, res, next) {
        await Links.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send("Update successfully!"))
            .catch(next);
    },

    //Xóa mềm danh mục -> [DELETE]/:id/trash
    async TrashLink(req, res, next) {
        await Links.delete({ _id: req.params.id })
            .then(() => res.send("Trash successfully!"))
            .catch(next);
    },

    //Lấy lại các danh mục đã xóa -> [PATCH]/:id/restore
    RestoreLink(req, res, next) {
        Links.restore({ _id: req.params.id })
            .then(() => res.send("Restore successfully!"))
            .catch(next);
    },

    //Xóa vĩnh viễn danh mục -> [DELETE]/:id/destroy
    async DestroyLink(req, res, next) {
        await Links.deleteOne({ _id: req.params.id })
            .then(() => res.send("Destroy successfully!"))
            .catch(next);
    }
}