const Joi = require("joi");
const createValidator = require("./createValidator");

const journalEntrySchema = Joi.object({
    patient_id: Joi.number().integer(),
    entry_date: Joi.date(),
    journal_entry: Joi.string(),
    analysis_score: Joi.number().integer()
});

module.exports = createValidator(journalEntrySchema);