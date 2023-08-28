const express = require("express");
const journals = express.Router();
const validateJournal = require("../validations/validateJournal")
const {
    getAllJournals
} = require("../queries/journals");

// index all journal entries
journals.get("/", async (req, res) => {
    try {
        const result = await getAllJournals();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = journals;