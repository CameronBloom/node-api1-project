
// BUILD YOUR SERVER HERE
const express = require("express")
const UserModel = require("./users/model")

const server = express()

server.get("/api/users", (req, res) => {
  UserModel.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting users",
        error: err.message,
        stack: err.stack
      })
    })
})

server.get("/api/users/:id", (req, res) => {
  UserModel.findById(req.params.id)
    .then(user => {
      if (!user) { 
        res.status(404).json({message: "The user with the specified ID does not exist"})
      } else {
        res.json(user)
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting user",
        error: err.message,
        stack: err.stack
      })
    })
})

// if no other endpoints match, we hit this catch-all
server.use("*", (req, res) => {
  // send back a piece of JSON
  res.status(404).json({
    message: "error"

  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
