const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String},       
        email: { type: String },      
        password: { type: String }, 
        birthday: { type: String },
        created_date: { type: String },
        image: { type: String },
        public: { type: String },
        follower: {type: Array},
        following: {type: Array},
        role: {type: String}
    }, 
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('User', User);