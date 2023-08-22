const express = require("express");
const cors = require("cors");

// config
const app = express();

// middleware
app.use(cors())
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome TEAM!!!")
});


module.exports = app;