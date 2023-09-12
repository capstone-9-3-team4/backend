const express = require("express");
const cors = require("cors");
const journalsControllers = require("./controllers/journalsControllers");
const patientsControllers = require("./controllers/patientsControllers");
const therapistControllers = require("./controllers/therapistControllers");
const usersControllers = require("./controllers/usersControllers");

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

app.use("/therapist", therapistControllers);

app.use("/users", usersControllers);

app.get("*", (req, res) => {
    console.log('app.js 404')
    res.status(404).send("Page Not Found");
})

module.exports = app;