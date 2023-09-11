const express = require('express');
const patientprofile = express.Router({ mergeParams: true});

const {
  
    getAllJournalEntriesByTherapist
  
} = require("../queries/patientprofile");



therapist.get("/:pid", async (req, res) => {
    const { tid, pid } = req.params;

    try {
        const { error, allJournalEntriesByTherapist} = await getAllJournalEntriesByTherapist(tid,pid);
        if (error) {
            throw new Error("Server Error")
        }
        res.status(200).json(allJournalEntriesByTherapist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = patientprofile;