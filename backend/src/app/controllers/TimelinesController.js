const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const TimelineLinkin = require('../models/TimelineModel');

module.exports = {
    // Hiển thị tất cả bài viết
    ShowwAllTimeline: function(req, res, next) {
        TimelineLinkin.find({})
            .then(timeline => {
                res.json({ 
                    timeline: mutipleMongooseToObject(timeline)
                });
            })
            .catch(next);
    },
    // Tạo mới một bài viết 
    CreateTimeline: function(req, res, next) {
        const timeline = new TimelineLinkin(req.body);
        timeline.save()
            .then(() => res.send('Thêm bài viết mới thành công 🐦'))
            .catch(next);
    },
    // Sửa một bài viết
    UpdateTimeline: function(req, res, next) {
        TimelineLinkin.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Sửa bài viết thành công 🐦'))
            .catch(next); 
    },
    // Xóa một bài viết
    DeleteTimeline: function(req, res, next) {
        TimelineLinkin.deleteOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Xóa bài viết thành công 🐦'))
            .catch(next);
    }
}