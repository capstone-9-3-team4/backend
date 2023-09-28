const db = require("../db/dbConfig");

// query to get one user
const getUserByID = async (id) => {
    try {
        const user = await db.one("SELECT t.id t_id,p.id p_id,u.id u_id,u.role role FROM therapists t right join users u on (t.user_id=u.id) left join patients p on (u.id = p.user_id) WHERE u.id= $1", id);
        return { user };
    } catch (error) {
        return { error: error };
    }
};

const getTherapistByUserID = async (id) => {
    try {
        const user = await db.one("SELECT t.id FROM therapists t join users u  on (t.user_id=u.id) WHERE u.id= $1", id);
        return { user };
    } catch (error) {
        return { error: error };
    }
};



module.exports = {
    getUserByID,
    getTherapistByUserID,
}