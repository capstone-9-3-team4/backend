const express = require("express");
const patients = express.Router({ mergeParams: true});
const journalsController = require("./journalsControllers");
const validatePatient = require("../validations/validatePatient");
const {
    getAllPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
} = require("../queries/patients");


// "therapist/:tid/patients/:pid/journals"
patients.use("/:pid/journals",journalsController)

// get method route to index all patients
patients.get("/", async (req, res) => {
    try {
        const { error, allPatients } = await getAllPatients();
        if (error) {
            throw new Error("ServerError");
        } else {
            res.status(200).json(allPatients);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method route to show one patient
patients.get("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const { error, patient } = await getPatient(pid);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Patient Not Found, Check Patient ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error");
        } else {
            res.status(200).json(patient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// post method route to create a patient
patients.post("/", validatePatient, async (req, res) => {
    try {
        const { error, newPatient } = await createPatient(req.body);
        if (error) {
            throw new Error("Server Error");
        } else {
            res.status(201).json(newPatient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// put method route to update a patient
patients.put("/:id", validatePatient, async (req, res) => {
    try {
        const { id } = req.params;
        const { error, updatedPatient } = await updatePatient(id, req.body);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Patient Not Found, Check Patient ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(updatedPatient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// delete method route to delete a patient 
patients.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { error, deletedPatient } = await deletePatient(id);
        if (error && error.received === 0) {
            res.status(404).json({ error: "Patient Not Found, Check Patient ID And Try Again" })
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(deletedPatient);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = patients;