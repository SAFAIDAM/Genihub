const mongoose = require("mongoose")

const PostSchema = mongoose.Schema(
  {
    title: {type: String, require: true},
    description: {type: String, require: true},
    // image: {type: String, require: true},
    // user: {type: mongoose.Schema.Types.ObjectId, ref: "users", require: true}
  }
)
const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;