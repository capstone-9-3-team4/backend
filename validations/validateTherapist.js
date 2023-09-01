const Joi = require("joi");
const createValidator = require("./createValidator");

const therapistSchema = Joi.object({
    id: Joi.number().integer().allow(null),
    license_number: Joi.number().integer().required(),
    first_name: Joi.string().min(2).required(),
    last_name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    specialization: Joi.string()
});

module.exports = createValidator(therapistSchema);