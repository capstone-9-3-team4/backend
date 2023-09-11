const db = require("../db/dbConfig");

// query to get all journal entries
// const getAllJournalsByTherapist = async () => {
//     try {
//         const allJournals = await db.any("SELECT * FROM journal_entries");
//         return { allJournals };
//     } catch (error) {
//         return { error: error };
//     }
// };

const getUJournalsOfPatientByTherapist = async (tid,pid) => {

    try {
        const UJournallOfPatientByTherapist = await db.any(
            `select p.id p_id, j.*  from therapists t join patients p on (t.id = p.therapist_id) 
            join journal_entries j on (p.id=j.patient_id) 
            where t.id=$1 and p.id=$2 and j.read = false 
            order by j.analysis_score,j.entry_date`, [tid,pid]
        )

        
   
        return {UJournallOfPatientByTherapist};
    } catch (error) {
       
        return { error: error };
    }
};



// query to get one journal entry
const getJournal = async (id) => {
    try {
        const journal = await db.one("SELECT * FROM journal_entries WHERE id=$1", id);
        return { journal };
    } catch (error) {
        return { error: error };
    }
};

// query to create journal entry
const createJournal = async (journal) => {
    try {
        const newJournal = await db.one(
            `INSERT INTO
            journal_entries(patient_id, entry_date, journal_entry, analysis_score)
            VALUES
             ($1, $2, $3, $4)
            RETURNING * `,
            [journal.patient_id, journal.entry_date, journal.journal_entry, journal.analysis_score]
        );
        return { newJournal };
    } catch (error) {
        return { error: error };
    }
};

// query to update journal entry
const updateJournal = async (id, journal) => {
    try {
        const updatedJournal = await db.one(
            `UPDATE journal_entries 
            SET patient_id=$1, entry_date=$2, journal_entry=$3, analysis_score=$4 
            WHERE id=$5 RETURNING *`,
            [journal.patient_id, journal.entry_date, journal.journal_entry, journal.analysis_score, id]
        );
        return { updatedJournal };
    } catch (error) {
        return { error: error };
    }
};

// query to delete journal entry
const deleteJournal = async (id) => {
    try {
        const deletedJournal = await db.one("DELETE FROM journal_entries WHERE id=$1 RETURNING *", id);
        return { deletedJournal };
    } catch (error) {
        return { error: error };
    }
};

module.exports = {
    // getAllJournalsByTherapist,
    getUJournalsOfPatientByTherapist,
    getJournal,
    createJournal,
    updateJournal,
    deleteJournal
}