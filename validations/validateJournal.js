const Joi = require("joi");
const createValidator = require("./createValidator");

const journalSchema = Joi.object({
    id: Joi.number().integer().allow(null),
    patient_id: Joi.number().integer().required(),
    entry_date: Joi.string().min(10).required(),
    journal_entry: Joi.string().required(),
    analysis_score: Joi.number().integer().required(),
    read: Joi.boolean().required()
});

module.exports = createValidator(journalSchema);