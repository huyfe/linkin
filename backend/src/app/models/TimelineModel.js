const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const timeline_linkin = new Schema (
    {
        _id: { type: Number },
        id_foreign: { type: Number },
        link: { type: [{ id_created: Number, date: Date}] },
        created_date: { type: Date},
        type: { type: String }
    },
    {
        _id: false,
        timestamps: true
    }
);

// Tự động tăng id nếu thêm vào db & tạo id khác nhau cho counter
timeline_linkin.plugin(AutoIncrement, {id: 'id_timeline'});

// Mongoose delete plugin
timeline_linkin.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('timeline_linkin', timeline_linkin);