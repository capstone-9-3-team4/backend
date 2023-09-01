const db = require("../db/dbConfig");

// query to get all therapists
const getAllTherapists = async () => {
    try {
        const allTherapists = await db.any("SELECT * FROM therapists");
        return { allTherapists };
    } catch (error) {
        return { error: error };
    }
};

// query to get one therapist
const getTherapist = async (id) => {
    try {
        const therapist = await db.one("SELECT * FROM therapists WHERE id=$1", id);
        return { therapist };
    } catch (error) {
        return { error: error };
    }
};

// query to create a therapist
const createTherapist = async (therapist) => {
    try {
        const newTherapist = await db.one(
            `INSERT INTO
            therapists (license_number, first_name, last_name, email, specialization)
            VALUES
             ($1, $2, $3, $4, $5)
            RETURNING *`,
            [therapist.license_number, therapist.first_name, therapist.last_name, therapist.email, therapist.specialization]
        );
        return { newTherapist };
    } catch (error) {
        return { error: error };
    }
};

// query to update a therapist
const updateTherapist = async (id, therapist) => {
    try {
        const updatedTherapist = await db.one(
            `UPDATE therapists
            SET license_number=$1, first_name=$2, last_name=$3, email=$4, specialization=$5
            WHERE id=$6 RETURNING *`,
            [therapist.license_number, therapist.first_name, therapist.last_name, therapist.email, therapist.specialization, id]
        );
        return { updatedTherapist };
    } catch (error) {
        return ({ error: error });
    }
};

// query to delete a therapist
const deleteTherapist = async (id) => {
    try {
        const deletedTherapist = await db.one("DELETE FROM therapists WHERE id=$1 RETURNING *", id);
        return { deletedTherapist };
    } catch (error) {
        return ({ error: error });
    }
};

module.exports = {
    getAllTherapists,
    getTherapist,
    createTherapist,
    updateTherapist,
    deleteTherapist
}