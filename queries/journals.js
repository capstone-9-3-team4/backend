const db = require("../db/dbConfig");

// query for all journal entries
const getAllJournals = async () => {
    try {
        const result = await db.any("SELECT * FROM journal_entries");
        return { result };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    getAllJournals,
}