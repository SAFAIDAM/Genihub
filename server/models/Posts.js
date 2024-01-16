const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String } // Add image field to store the image filename
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;