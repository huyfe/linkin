const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const TimelineLinkin = require('../models/TimelineModel');

module.exports = {
    // Hiển thị tất cả bài viết
    async ShowwAllTimeline(req, res, next) {
        await TimelineLinkin.find({})
            .then((timeline) => res.json(timeline))
            .catch(next);
    },
    // Hiện chi tiết một bài viết 
    async DetailTimeline(req, res, next) {
        await TimelineLinkin.findOne({ _id: req.params.id })
            .then((timeline) => res.json(timeline))
            .catch(next)
    },
    // Tạo mới một bài viết 
    async CreateTimeline(req, res, next) {
        const timeline = new TimelineLinkin(req.body);
        timeline.save()
            .then(() => res.json(timeline))
            .catch(next);
    },
    // Sửa một bài viết
    async UpdateTimeline(req, res, next) {
        await TimelineLinkin.updateOne({ _id: req.params.id }, req.body.data)
            .then(() => res.send('Sửa bài viết thành công 🐦'))
            .catch(next);
    },
    // Xóa một bài viết
    async DeleteTimeline(req, res, next) {
        await TimelineLinkin.deleteOne({ _id: req.params.id })
            .then(() => res.send('Xóa bài viết thành công 🐦'))
            .catch(next);
    },
    // Ẩn bài viết
    async HideTimeline(req, res, next) {
        await TimelineLinkin.delete({ _id: req.params.id })
            .then(() => res.send("Ẩn bài viết thành công 👻"))
            .catch(next)
    },
    // Hiện bài viết
    async UnhideTimeline(req, res, next) {
        await TimelineLinkin.restore({ _id: req.params.id })
            .then(() => res.send("Đã bỏ ẩn bài viết 👻"))
            .catch(next)
    },
    // Hiện tất cả bài viết bị ẩn
    async ShowHideTimeline(req, res, next) {
        await TimelineLinkin.findDeleted({})
            .then((timeline) => res.json(timeline))
            .catch(next);
    },
    async ShowPostByGroupTimeline(req, res, next) {
       let idForeign = req.params.id_foreign;
        await TimelineLinkin.findOne({id_foreign: idForeign, type: "Group"})
        .then((timeline) => res.json(timeline))
        .catch(next)
    },
    async ShowPostByUserTimeline(req, res, next) {
        let idForeign = req.params.id_foreign;
        await TimelineLinkin.findOne({id_foreign:idForeign, type: "User"})
            .then((timeline) => res.json(timeline))
            .catch(next)
    },
}