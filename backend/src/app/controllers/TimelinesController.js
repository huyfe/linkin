const { mutipleMongooseToObject } = require('../../util/mongoose');
const Timelines = require('../models/TimelineModel');

class TimelinesController {
    // Show all post 
    ShowwAllTimeline(req, res, next){
        Timelines.find({})
            .then(timelines => {
                res.json({ 
                    timelines: mutipleMongooseToObject(timelines)
                });
            })
            .catch(next);
    }
    // Show detail post 
    ShowDetailTimeline(req, res, next) {
        Timelines.findOne({ slug: req.params.slug })
            .then(timelines => {
                res.json({ timelines: mongooseToObject(timelines) });
            })
            .catch(next);       
    }
}

module.exports = new TimelinesController();