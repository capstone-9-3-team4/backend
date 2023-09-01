const Joi = require("joi");
const createValidator = require("./createValidator");

const patientSchema = Joi.object({
    id: Joi.number().integer().allow(null),
    therapist_id: Joi.number().integer().required(),
    first_name: Joi.string().min(2).required(),
    last_name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    dob: Joi.string().min(10).required(),
    gender: Joi.string().required(),
    contact_number: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip_code: Joi.string().required(),
});

module.exports = createValidator(patientSchema);