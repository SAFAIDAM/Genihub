
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('mongoose')
const PostModel = require("./models/Posts")


const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect('mongodb+srv://idamhamedsafa:88safa88@cluster0.hjpt4hx.mongodb.net/ComApp')


app.get("/ideas", (req, res) => {
  PostModel.find({})
    .then(data => {
      res.send(data)
      console.log(data)
    })
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  PostModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      enroll: req.body.enroll,
      // image: req.body.image
    }
  )
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  PostModel.findByIdAndDelete({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
})


  .then(() => {
    console.log(" connected to database ");
    app.listen(8001, () => {
      console.log("server running on port 8000")
    })
  }).catch((err) => {
    console.error(err)
  })
