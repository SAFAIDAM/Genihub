
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const PostModel = require("./models/Posts")
const moment = require("moment");
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./routes/authRoutes'))

mongoose.connect('mongodb+srv://idamhamedsafa:88safa88@cluster0.hjpt4hx.mongodb.net/comunity?retryWrites=true&w=majority')


app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images")
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file.filename;
    PostModel.create({ title, description, image })
      .then(result => res.json(result))
      .catch(err => console.log(err));
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

app.get("/ideas", async (req, res) => {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    const formattedPosts = posts.map((post) => ({
      ...post.toObject(),
      formattedDate: moment(post.createdAt).format("MMM D, YYYY"),
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

app.post("/createidea", upload.single('file'), (req, res) => {
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