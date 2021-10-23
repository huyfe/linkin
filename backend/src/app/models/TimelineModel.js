const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Timeline = new Schema (
    {
        _id: { type: Number },
        id_foreign: { type: Number },
        link: [{ id_created: Number, created_date: Date }],
        created_date: {type: Date},
        type: { type: String }
    }
)

// Timeline.plugin(AutoIncrement);

// Mongoose delete plugin
Timeline.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Timeline', Timeline);