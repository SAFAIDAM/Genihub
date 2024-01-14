
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('mongoose')
const PostModel = require("./models/Posts")
const moment = require("moment");


const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect('mongodb+srv://idamhamedsafa:88safa88@cluster0.hjpt4hx.mongodb.net/ComApp')


const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }, // Add createdAt field
});

app.get("/ideas", async (req, res) => {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    // Format date and send the response
    const formattedPosts = posts.map((post) => ({
      ...post.toObject(),
      formattedDate: moment(post.createdAt).format("MMM D, YYYY"), // Format date
    }));
    res.json(formattedPosts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.get("/ideas", (req, res) => {
//   PostModel.find({})
//     .then(data => {
//       res.send(data)
//       console.log(data)
//     })
//     .catch(err => res.json(err))
// })

app.post("/createidea", (req, res) => {
  PostModel.create(req.body)
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

app.put("/updateidea/:id", (req, res) => {
  const id = req.params.id;
  PostModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      description: req.body.description,
      // image: req.body.image
      // image: req.body.image
    }
  )
    .then(post => res.json(post))
    .catch(err => res.json(err));
});

app.delete('/deleteidea/:id', (req, res) => {
  const id = req.params.id;
  PostModel.findByIdAndDelete({ _id: id })
    .then(post => res.json(post))
    .catch(err => res.json(err));
})


app.listen(8000, () => { console.log("server running on port 8000") })