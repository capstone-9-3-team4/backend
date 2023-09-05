const db = require("../db/dbConfig");

// query to get one user
const getUserByID = async (id) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE id= $1", id);
        return { user };
    } catch (error) {
        return { error: error };
    }
};

module.exports = {
    getUserByID
}