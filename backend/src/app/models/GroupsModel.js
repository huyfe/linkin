const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema(
    {
        title: { type: String},       
        desc: { type: String },  
        image: { type: String },    
        created_date: { type: String },
        public: { type: String },
        id_links: {type: [{ id: Number }] },
        id_members: {type: [{ id: Number }] },
        color_text: { type: String }, 
        color_background: { type: String },
        id_author: {type: [{ id: Number }] }
    }, 
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Group', Group);