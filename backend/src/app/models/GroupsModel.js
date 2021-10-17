const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema(
    {
        title: { type: String},       
        desc: { type: String },  
        image: { type: String },    
        created_date: { type: String },
        public: { type: String },
        id_link: {type: Array},
        id_user: {type: String},
        id_cat: {type: Array},
        id_members: {type: Array},
        color_text: { type: String }, 
        color_background: { type: String }
    }, 
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Group', Group);