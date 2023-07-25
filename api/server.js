
// BUILD YOUR SERVER HERE
const express = require("express")
const UserModel = require("./users/model")

const server = express()

server.get("/api/users", (req, res) => {
  UserModel.find()
    .then(() => {
      throw new Error("nooooo")
    })
    .catch(err => {
      res.status(500).json({
        message: "error getting users",
        error: err.message
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
