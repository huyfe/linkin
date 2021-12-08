const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema;

mongoose.plugin(slug);
const User = new Schema(
    {
        _id: { type: Number },
        name: { type: String},       
        email: { type: String },   
        password: { type: String }, 
        birthday: { type: Date },
        created_date: { type: Date },
        image: { type: String },
        theme: { type: String },
        public: { type: String },
        follower: [{id: Number, name: String, image: String, slug: String}],
        following: [{id: Number, name: String, image: String, slug: String}],
        role: {type: String},
        slug: { type: String, slug: 'name', unique: true },
        accessToken: {type:String}
    }, 
    {
        _id: false,
        timestamps: true
    }
);

User.plugin(AutoIncrement, {id: 'id_users' });

User.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(11), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


// mongoose delete plugin
User.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

// bcrypt.compareSync(password, this.password); 

module.exports = mongoose.model('User', User);