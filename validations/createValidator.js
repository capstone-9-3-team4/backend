const createValidator = (validatorSchema) => (req, res, next) => {
    const { error } = validatorSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = createValidator;