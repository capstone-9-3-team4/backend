const express = require("express");
const patients = express.Router({ mergeParams: true });
const journalsControllers = require("./journalsControllers");
const validatePatient = require("../validations/validatePatient");
const {
    getAllPatients,
    getPatientByUserId,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
} = require("../queries/patients");

// loading journalsControllers middleware
patients.use("/:pid/journals", journalsControllers)

// get method route to request one patient
patients.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { error, patient } = await getPatientById(id);
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



patients.get("/user/:uid", async (req, res) => {
    try {
        const { uid } = req.params;
        const { error, patient } = await getPatientByUserId(uid);
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



// // get method route to index all patients
// patients.get("/", async (req, res) => {
//     try {
//         const { error, allPatients } = await getAllPatients();
//         if (error) {
//             throw new Error("ServerError");
//         } else {
//             res.status(200).json(allPatients);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // post method route to create a patient
// patients.post("/", validatePatient, async (req, res) => {
//     try {
//         const { error, newPatient } = await createPatient(req.body);
//         if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(201).json(newPatient);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // put method route to update a patient
// patients.put("/:id", validatePatient, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, updatedPatient } = await updatePatient(id, req.body);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Patient Not Found, Check Patient ID And Try Again" });
//         } else if (error) {
//             throw new Error("Server Error")
//         } else {
//             res.status(200).json(updatedPatient);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // delete method route to delete a patient 
// patients.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, deletedPatient } = await deletePatient(id);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Patient Not Found, Check Patient ID And Try Again" })
//         } else if (error) {
//             throw new Error("Server Error")
//         } else {
//             res.status(200).json(deletedPatient);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = patients;