// BUILD YOUR SERVER HERE
const express = require("express")

const server = express()

// if no other end points match
server.use("*", (req, res) => {
  // send back a piece of JSON
  res.status(404).json({
    message: "error"

  })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
