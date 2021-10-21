const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const User = new Schema(
    {
        _id: { type: Number },
        id: { type: Number },
        name: { type: String},       
        email: { type: String },      
        password: { type: String }, 
        birthday: { type: String },
        created_date: { type: String },
        image: { type: String },
        public: { type: String },
        follower: {type: [{id: Number, name:String, avatar:String}]},
        following: {type: [{id: Number, name:String, avatar:String}]},
        role: {type: String},
        slug: { type: String, slug: 'name', unique: true }
    }, 
    {
        _id: false,
        timestamps: true
    }
);

User.plugin(AutoIncrement);

// mongoose delete plugin
User.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('User', User);