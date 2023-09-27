const express = require("express");
const journals = express.Router({ mergeParams: true });
const validateJournal = require("../validations/validateJournal");
const {
    getUnreadJournalsOfPatientByTherapist,
    getUnreadJournalOfPatientByTherapist,
    updateJournal,
    createJournal,
    getAllJournalsByTherapist
    // getAllJournals,
    // getJournal,
    // deleteJournal
} = require("../queries/journals");


journals.get("/", async (req, res) => {
    try {
        const { error, allJournals } = await getAllJournalsByTherapist();
        res.status(200).json(allJournals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method route to request unread journals of patients by therapist
journals.get("/unread", async (req, res) => {
    const { tid, pid } = req.params;
    try {
        const { error, unreadJournalsOfPatientByTherapist } = await getUnreadJournalsOfPatientByTherapist(tid, pid);

        if (error) {
            throw new Error("Server Error");
        } else {

            res.status(200).json(unreadJournalsOfPatientByTherapist);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get method route to request one unread journal of patient by therapist
journals.get("/unread/:jid", async (req, res) => {
    const { tid, pid, jid } = req.params;

    try {
        const { error, unreadJournalOfPatientByTherapist } = await getUnreadJournalOfPatientByTherapist(tid, pid, jid);
        console.log(unreadJournalOfPatientByTherapist);
        if (error) {
            console.log("get error:", error)

            throw new Error("Server Error");
        } else {

            res.status(200).json(unreadJournalOfPatientByTherapist);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// put method route to update journal 
journals.put("/:jid", async (req, res) => {
    const { jid } = req.params;
    const { error, updatedJournal } = await updateJournal(jid, req.body);
    if (error && error.received === 0) {
        res.status(404).json({ error: "Journal Entry Not Found, Check Journal ID And Try Again" })
    } else if (error) {
        throw new Error("Server Error");
    } else {
        res.status(200).json(updatedJournal);
    }
});

// post method route to create a journal
journals.post("/", async (req, res) => {
    // journals.post("/", validateJournal, async (req, res) => {   
       
    try {
        const { error, newJournal } = await createJournal(req.body);
        if (error) {
            throw new Error("Server Error");
        } else {
            res.status(201).json(newJournal);
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// get method route to index all journals
// journals.get("/", async (req, res) => {
//     try {
//         const { error, allJournals } = await getAllJournals();
//         if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(allJournals);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // get method route to show one journal 
// journals.get("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, journal } = await getJournal(id);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Journal Entry Not Found, Check Journal ID And Try Again" });
//         } else if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(journal);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })


// // put method route to update a journal
// journals.put("/:id", validateJournal, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, updatedJournal } = await updateJournal(id, req.body);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Journal Entry Not Found, Check Journal ID And Try Again" })
//         } else if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(updatedJournal);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // delete method route to delete a journal 
// journals.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { error, deletedJournal } = await deleteJournal(id);
//         if (error && error.received === 0) {
//             res.status(404).json({ error: "Journal Entry Not Found, Check Journal ID And Try Again" })
//         } else if (error) {
//             throw new Error("Server Error");
//         } else {
//             res.status(200).json(deletedJournal);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// });

module.exports = journals;