const mongoose = require("mongoose")


const linkSchema = mongoose.Schema(
  {
    linkTitle: { type: String, required: true},
    linkUrl: { type: String, required: true},
    linkImage: { type: String},
    linkDate: { type: Date, default: Date.now}
  }
)


const LinkModel = mongoose.model("links", linkSchema);
module.exports = LinkModel;