const db = require("../db/dbConfig");

// query to get all unread journals from all patients by therapist 
const getUnreadJournalsOfPatientByTherapist = async (tid, pid) => {
    try {
        const unreadJournalsOfPatientByTherapist = await db.any(
            `SELECT p.id p_id, j.* FROM therapists t join patients p ON (t.id = p.therapist_id) 
            JOIN journal_entries j ON (p.id=j.patient_id) 
            WHERE t.id=$1 and p.id=$2 AND j.read = false 
            ORDER BY j.analysis_score,j.entry_date`, [tid, pid]
        )
        return { unreadJournalsOfPatientByTherapist };
    } catch (error) {
        return { error: error };
    }
};

// query to get one unread journal from one patient by therapist
const getUnreadJournalOfPatientByTherapist = async (tid, pid, jid) => {
    try {
        const unreadJournalOfPatientByTherapist = await db.one(
            `SELECT p.id p_id, j.* FROM therapists t JOIN patients p ON (t.id = p.therapist_id) 
            JOIN journal_entries j ON (p.id=j.patient_id) 
            WHERE t.id=$1 and p.id=$2 AND j.id=$3 AND j.read = false 
            ORDER BY j.analysis_score,j.entry_date`, [tid, pid, jid]
        );
        return { unreadJournalOfPatientByTherapist };
    } catch (error) {
        return { error: error };
    }
};

// query to get all journal entries
// const getAllJournalsByTherapist = async () => {
//     try {
//         const allJournals = await db.any("SELECT * FROM journal_entries");
//         return { allJournals };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to get one journal entry
// const getJournal = async (id) => {
//     try {
//         const journal = await db.one("SELECT * FROM journal_entries WHERE id=$1", id);
//         return { journal };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to create journal entry
// const createJournal = async (journal) => {
//     try {
//         const newJournal = await db.one(
//             `INSERT INTO
//             journal_entries(patient_id, entry_date, journal_entry, analysis_score)
//             VALUES
//              ($1, $2, $3, $4)
//             RETURNING * `,
//             [journal.patient_id, journal.entry_date, journal.journal_entry, journal.analysis_score]
//         );
//         return { newJournal };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to update journal entry
// const updateJournal = async (id, journal) => {
//     try {
//         const updatedJournal = await db.one(
//             `UPDATE journal_entries 
//             SET patient_id=$1, entry_date=$2, journal_entry=$3, analysis_score=$4 
//             WHERE id=$5 RETURNING *`,
//             [journal.patient_id, journal.entry_date, journal.journal_entry, journal.analysis_score, id]
//         );
//         return { updatedJournal };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to delete journal entry
// const deleteJournal = async (id) => {
//     try {
//         const deletedJournal = await db.one("DELETE FROM journal_entries WHERE id=$1 RETURNING *", id);
//         return { deletedJournal };
//     } catch (error) {
//         return { error: error };
//     }
// };

module.exports = {
    getUnreadJournalsOfPatientByTherapist,
    getUnreadJournalOfPatientByTherapist
    // getAllJournalsByTherapist,
    // getJournal,
    // createJournal,
    // updateJournal,
    // deleteJournal
}