const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Link = new Schema(
    {
        _id: { type: Number },
        title: { type: String },
        link: { type: String },
        desc: { type: String },
        image: { type: String },
        created_date: { type: Date },
        public: { type: Boolean },
        id_author: { type: Number },
        id_cats: { type: [{ id: Number }] },
        id_passengers: { type: [{ id: Number }] },
        id_groups: { type: [{ id: Number }] },
        type: { type: String },
    },
    {
        _id: false,
        timestamps: true
    }
);

// Tự động tăng id khi thêm link vào database
Link.plugin(AutoIncrement);

// mongoose delete plugin
Link.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Link', Link);