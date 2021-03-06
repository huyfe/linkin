
// Nhúng model link
const Links = require('../models/LinksModel');


// Import socket from index.js


module.exports = {
    //Hiện tất cả links -> [GET]/
    async ShowAllLinks(req, res, next) {
        await Links.find({})
            .then((data) => {
                const links = data.reverse();
                return res.json(links)
            })
            .catch(next);
    },

    //Hiện tất cả link của User -> [GET]/link-user/:id
    async ShowAllByUser(req, res) {
        try {
            const links = await Links.find({ id_author: req.params.id_author, type: req.params.type });
            res.json(links);
        }
        catch (err) {
            res.json({ error: err })
        }
    },

    //Hiện giới hạn links số lượng 8
    async ShowAllLinksLimit(req, res, next) {
        try {
            const links = await Links.find({ id_author: req.params.id_author, type: req.params.type }).limit(8);
            res.json(links);
        } catch (err) {
            res.json({ error: err });
        }
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

    //Thêm link -> [POST]/
    async AddLink(req, res, next) {
        const newLink = req.body.data;
        console.log(newLink);
        const link = new Links(newLink);
        await link
            .save()
            .then(() => res.json(link))
            .catch((err) => res.send(err));
    },

    //Cập nhật Ghim cho link -> [PATCH]/:id/pin
    async UpdatePin(req, res, next) {
        try {
            const link = await Links.findById(req.params.id);
            await Links.findByIdAndUpdate(req.params.id, { pinned: !link.pinned });
            const linkUpdate = await Links.findById(req.params.id);
            res.json(linkUpdate);
        } catch (err) {
            res.json({ error: err });
        }
    },

    //Cập nhật link -> [PUT]/:id/update
    async UpdateLink(req, res, next) {
        await Links.updateOne({ _id: req.params.id }, req.body.data)
            .then(() => res.send("Update successfully!"))
            .catch(next);
    },

    //Xóa mềm link -> [DELETE]/:id/trash
    async TrashLink(req, res, next) {
        await Links.delete({ _id: req.params.id })
            .then(() => res.send("Trash successfully!"))
            .catch(next);
    },

    //Lấy lại các link đã xóa -> [PATCH]/:id/restore
    RestoreLink(req, res, next) {
        Links.restore({ _id: req.params.id })
            .then(() => res.send("Restore successfully!"))
            .catch(next);
    },

    //Xóa vĩnh viễn link -> [DELETE]/:id/destroy
    async DestroyLink(req, res, next) {
        await Links.deleteOne({ _id: req.params.id })
            .then(() => res.send("Destroy successfully!"))
            .catch(next);
    }
}