const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Group = new Schema(
    {
        _id: { type: Number },
        title: { type: String},       
        desc: { type: String },  
        image: { type: String },    
        created_date: { type: Date },
        public: { type: String },
        id_links: {type: [{ id: Number }] },
        id_members: {type: [{ id: Number }] },
        color_text: { type: String }, 
        color_background: { type: String },
        id_author: {type: [{ id: Number }] }
    }, 
    {
        _id: false,
        timestamps: true
    }
);


// // Tự động tăng id khi thêm link vào database
Group.plugin(AutoIncrement,  {collection_name: 'counter_groups' });//tạo thêm collection

// mongoose delete plugin
Group.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all'
});
module.exports = mongoose.model('Group', Group);