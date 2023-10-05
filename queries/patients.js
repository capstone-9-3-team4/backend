const db = require("../db/dbConfig");

// query to get all patients
const getAllPatientsByTherapist = async (tid) => {
    try {
        const allPatients = await db.any("SELECT * FROM patients WHERE therapist_id=$1 ORDER BY last_name ASC", tid);
        return { allPatients };
    } catch (error) {
        return { error: error };
    }
};


const getPatientById = async (id) => {
    try {
        const patient = await db.one("SELECT * FROM patients WHERE id=$1", id);
        return { patient };
    } catch (error) {
        return { error: error };
    }
};


// query to get one patient
const getPatientByUserId = async (id) => {
    try {
        const patient = await db.one("SELECT * FROM patients WHERE user_id=$1", id);
        return { patient };
    } catch (error) {
        return { error: error };
    }
};


// query to get therapist info of one patient
const getTherapistInfo = async (pid) => {
    try {
        const therapist = await db.one("SELECT specialization,t.email email,license_number,t.first_name first_name,t.last_name last_name  FROM patients p join therapists t on (t.id=p.therapist_id) WHERE p.therapist_id=$1 group by 1,2,3,4,5", [pid]);
        return { therapist };
    } catch (error) {
        return { error: error };
    }
};

// query to create one patient
const createPatient = async (patient) => {
    try {
        const newPatient = await db.one(
            `INSERT INTO
            patients (therapist_id, first_name, last_name, email, dob, gender, contact_number, address, city, state, zip_code)
            VALUES
             ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *`,
            [patient.therapist_id, patient.first_name, patient.last_name, patient.email, patient.dob, patient.gender, patient.contact_number, patient.address, patient.city, patient.state, patient.zip_code]
        );
        return { newPatient };
    } catch (error) {
        return { error: error };
    }
};

// query to update patient
const updatePatient = async (id, patient) => {
    try {
        const updatedPatient = await db.one(
            `UPDATE patients
            SET therapist_id=$1, first_name=$2, last_name=$3, email=$4, dob=$5, gender=$6, contact_number=$7, address=$8, city=$9, state=$10, zip_code=$11
            WHERE id=$12 RETURNING *`,
            [patient.therapist_id, patient.first_name, patient.last_name, patient.email, patient.dob, patient.gender, patient.contact_number, patient.address, patient.city, patient.state, patient.zip_code, id]
        );
        return { updatedPatient };
    } catch (error) {
        return { error: error };
    }
};

// query to delete a patient
const deletePatient = async (id) => {
    try {
        const deletedPatient = await db.one("DELETE FROM patients WHERE id=$1 RETURNING *", id);
        return { deletedPatient };
    } catch (error) {
        return { error: error };
    }
};

module.exports = {
    getAllPatientsByTherapist,
    getPatientById,
    getPatientByUserId,
    createPatient,
    updatePatient,
    deletePatient,
    getTherapistInfo
}