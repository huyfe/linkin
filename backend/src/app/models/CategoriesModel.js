const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoosedelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    _id: { type: Number },
    title: { type: String },
    image: { type: String,},
    public: { type: Boolean, default: true },
    pin: { type: Boolean, default: false },
    id_links: { type: Array, default: [] },
    id_user_or_group: { type: Number },
    role: { type: Number, default: 0 },
    slug: { type: String, slug: "title", unique: true },
  },
  {
    _id: false,
    timestamps: true,
  }
);

mongoose.plugin(slug);

Category.plugin(AutoIncrement, { id: "id_category" });

// mongoose delete plugin
Category.plugin(mongoosedelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Category", Category);
