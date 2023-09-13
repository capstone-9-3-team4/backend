const express = require("express");
const therapist = express.Router();
const patientsControllers = require("./patientsControllers");
const validateTherapist = require("../validations/validateTherapist");
const {
    getTherapistAndHighRiskPatients,
    getTherapistAndMediumRiskPatients,
    getTherapistAndLowRiskPatients
    // getAllTherapists,
    // getTherapist,
    // createTherapist,
    // updateTherapist,
    // deleteTherapistg
} = require("../queries/therapists");
const {
    getAllJournals
} = require("../queries/journals");


// get method route to request all patients with high risk journals for one therapist
therapist.get("/:tid/dashboard/highrisk", async (req, res) => {
    try {
        const { tid } = req.params;
        const { error, allHighRiskPatientsByTherapist } = await getTherapistAndHighRiskPatients(tid);

        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(allHighRiskPatientsByTherapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method route to request all patients by therapist that are at medium risk
therapist.get("/:tid/dashboard/mediumrisk", async (req, res) => {
    try {
        const { tid } = req.params;
        const { error, allMediumRiskPatientsByTherapist } = await getTherapistAndMediumRiskPatients(tid);

        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(allMediumRiskPatientsByTherapist);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// get method route to request all patients by therapist that are at low/no risk
therapist.get("/:tid/dashboard/lowrisk", async (req, res) => {
    try {
        const { tid } = req.params;
        const { error, allLowRiskPatientsByTherapist } = await getTherapistAndLowRiskPatients(tid);

        if (error && error.received === 0) {
            res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(allLowRiskPatientsByTherapist);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// loading patientsControllers middleware
therapist.use("/:tid/patients", patientsControllers)


// // get method route to show all journals for one patient for one therapist
// therapist.get("/:idt/dashboard/patient/:idp", async (req, res) => {
//     try {
//         const { idt, idp } = req.params;
//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// })


// // get method route to index all therapists (for admins)
// therapist.get("/", async (req, res) => {
//     try {
//         const { error, allTherapists } = await getAllTherapists();
//         if (error) {
//             throw new Error("Server Error")
//         }
//         res.status(200).json(allTherapists);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // post method route to create a therapist (admin)
// therapist.post("/", validateTherapist, async (req, res) => {
//     try {
//         const { error, newTherapist } = await createTherapist(req.body);
//         if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(201).json(newTherapist);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// });

// // put method route to update a therapist (admin)
// therapist.put("/:id", validateTherapist, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, updatedTherapist } = await updateTherapist(id, req.body);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
//         } else if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(updatedTherapist);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // delete method route to delete a therapist (admin)
// therapist.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, deletedTherapist } = await deleteTherapist(id);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Therapist Not Found, Check Therapist ID And Try Again" });
//         } else if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(deletedTherapist);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = therapist;