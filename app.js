const express = require("express");
const cors = require("cors");
const journalsControllers = require("./controllers/journalsControllers");
const patientsControllers = require("./controllers/patientsControllers");
const therapistsControllers = require("./controllers/therapistsControllers");

// config
const app = express();

// middleware
app.use(cors())
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome TEAM!!!")
});

app.use("/journals", journalsControllers);

app.use("/patients", patientsControllers);

app.use("/therapists", therapistsControllers);

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

module.exports = app;