const db = require("../db/dbConfig");

// query to get all journal entries by one therapist
const getAllJournalEntriesByTherapist = async (tid, pid) => {
    try {
        const allJournallEntriesByTherapist = await db.any(
            `select p.*, j.*  from therapists t join patients p on (t.id = p.therapist_id) 
            join journal_entries j on (p.id=j.patient_id) 
            where t.id=$1 and p.id=$2 and j.read = false 
            order by j.analysis_score,j.entry_date`, [tid, pid]
        )

        return { allJournallEntriesByTherapist };

    } catch (error) {
        return { error: error };
    }
};


module.exports = {
    getAllJournalEntriesByTherapist


}

