const db = require("../db/dbConfig");

// query to get one therapist and all journal entries and all journal entries for therapist
const getTherapistAndHighRiskPatients = async (id) => {
  
    try {
        const allHighRiskPatientsByTherapist = await db.any(
            `SELECT t.id t_id,t.first_name t_first_name, t.last_name t_last_name, t.email, t.license_number, p.first_name p_first_name, p.last_name p_last_name, p.id p_id, p.profile_picture
            FROM therapists t JOIN patients p ON (t.id=p.therapist_id) JOIN journal_entries j 
            ON (p.id=j.patient_id) WHERE t.user_id=$1 AND j.analysis_score = 1 AND j.read=false
            GROUP BY 1,2,3,4,5,6,7,8,9`, id
        )
        return { allHighRiskPatientsByTherapist };
    } catch (error) {
        return { error: error };
    }
};

const getTherapistAndYellowRiskPatients = async (id) => {
  
    try {
        const allYellowRiskPatientsByTherapist = await db.any(
            `SELECT t.id t_id,t.first_name t_first_name, t.last_name t_last_name, t.email, t.license_number, p.first_name p_first_name, p.last_name p_last_name, p.id p_id,p.profile_picture
            FROM therapists t JOIN patients p ON (t.id=p.therapist_id) JOIN journal_entries j 
            ON (p.id=j.patient_id) WHERE t.user_id=$1 AND j.analysis_score = 2 AND j.read=false
            GROUP BY 1,2,3,4,5,6,7,8,9`, id
        )
        return { allYellowRiskPatientsByTherapist };
    } catch (error) {
        return { error: error };
    }
};


const getTherapistAndGreenRiskPatients = async (id) => {
  
    try {
        const allGreenRiskPatientsByTherapist = await db.any(
            `SELECT t.id t_id,t.first_name t_first_name, t.last_name t_last_name, t.email, t.license_number, p.first_name p_first_name, p.last_name p_last_name, p.id p_id,p.profile_picture
            FROM therapists t JOIN patients p ON (t.id=p.therapist_id) JOIN journal_entries j 
            ON (p.id=j.patient_id) WHERE t.user_id=$1 AND j.analysis_score = 3 AND j.read=false
            GROUP BY 1,2,3,4,5,6,7,8,9`, id
        )
        return { allGreenRiskPatientsByTherapist };
    } catch (error) {
        return { error: error };
    }
};





// // query to get all therapists (admin)
// const getAllTherapists = async () => {
//     try {
//         const allTherapists = await db.any("SELECT * FROM therapists");
//         return { allTherapists };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to create a therapist (admin)
// const createTherapist = async (therapist) => {
//     try {
//         const newTherapist = await db.one(
//             `INSERT INTO
//             therapists (license_number, first_name, last_name, email, specialization)
//             VALUES
//              ($1, $2, $3, $4, $5)
//             RETURNING *`,
//             [therapist.license_number, therapist.first_name, therapist.last_name, therapist.email, therapist.specialization]
//         );
//         return { newTherapist };
//     } catch (error) {
//         return { error: error };
//     }
// };

// // query to update a therapist (admin)
// const updateTherapist = async (id, therapist) => {
//     try {
//         const updatedTherapist = await db.one(
//             `UPDATE therapists
//             SET license_number=$1, first_name=$2, last_name=$3, email=$4, specialization=$5
//             WHERE id=$6 RETURNING *`,
//             [therapist.license_number, therapist.first_name, therapist.last_name, therapist.email, therapist.specialization, id]
//         );
//         return { updatedTherapist };
//     } catch (error) {
//         return ({ error: error });
//     }
// };

// // query to delete a therapist (admin)
// const deleteTherapist = async (id) => {
//     try {
//         const deletedTherapist = await db.one("DELETE FROM therapists WHERE id=$1 RETURNING *", id);
//         return { deletedTherapist };
//     } catch (error) {
//         return ({ error: error });
//     }
// };

module.exports = {
    getTherapistAndHighRiskPatients,
    getTherapistAndYellowRiskPatients,
    getTherapistAndGreenRiskPatients
    
    // getAllTherapists,
    // getTherapist,
    // createTherapist,
    // updateTherapist,
    // deleteTherapist
}