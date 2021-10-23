const { mutipleMongooseToObject } = require('../../util/mongoose');
const Timelines = require('../models/TimelineModel');

class TimelinesController {
    // Show all post from timeline
    ShowwAllTimeline(req, res, next){
        Timelines.find({})
            .then(timelines => {
                res.json({ 
                    timelines: mutipleMongooseToObject(timelines)
                });
            })
            .catch(next);
    }
}

module.exports = new TimelinesController();