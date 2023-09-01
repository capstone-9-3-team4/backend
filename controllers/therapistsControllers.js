const express = require("express");
const therapists = express.Router();
const validateTherapist = require("../validations/validateTherapist");
const {
    getAllTherapists,
    getTherapist,
    createTherapist,
    updateTherapist,
    deleteTherapist
} = require("../queries/therapists");

// get method route to index all therapists
therapists.get("/", async (req, res) => {
    try {
        const { error, allTherapists } = await getAllTherapists();
        if (error) {
            throw new Error("Server Error")
        }
        res.status(200).json(allTherapists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method route to show one therapist
therapists.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { error, therapist } = await getTherapist(id);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(therapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// post method route to create a therapist
therapists.post("/", validateTherapist, async (req, res) => {
    try {
        const { error, newTherapist } = await createTherapist(req.body);
        if (error) {
            throw new Error("Server Error");
        } else {
            res.status(201).json(newTherapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// put method route to update a therapist
therapists.put("/:id", validateTherapist, async (req, res) => {
    try {
        const { id } = req.params;
        const { error, updatedTherapist } = await updateTherapist(id, req.body);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error");
        } else {
            res.status(200).json(updatedTherapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// delete method route to delete a therapist
therapists.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { error, deletedTherapist } = await deleteTherapist(id);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error");
        } else {
            res.status(200).json(deletedTherapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = therapists;