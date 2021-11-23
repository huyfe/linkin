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
        categories: { type: [{ id: Number, name: String }] },
        id_passengers: { type: [{ id: Number }] },
        id_groups: { type: [{ id: Number }] },
        type: { type: String },
        slug: { type: String, slug: "title", unique: true },
    },
    {
        _id: false,
        timestamps: true
    }
);

// Tự động tăng id khi thêm link vào database
Link.plugin(AutoIncrement, { id: "id_link" });

// mongoose delete plugin
Link.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Link', Link);