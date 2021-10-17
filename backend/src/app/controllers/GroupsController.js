const { mutipleMongooseToObject } = require('../../util/mongoose');
const passport = require('passport');
const Groups = require('../models/GroupsModel');

passport.serializeUser(function(Group, cb){
    cb(null, Group.id);
})

class GroupsController {
    ShowAllGroups(req, res, next){
        Groups.find({})
            .then(groups => {
                res.json({ 
                    groups: mutipleMongooseToObject(groups)
                });
            })
            .catch(next);
    }
}

module.exports = new GroupsController();