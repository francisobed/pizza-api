const Joi = require('joi');

exports.createCategorySchema = (req, res, next) => {
    // create schema object
    const schema = Joi.object({
        name: Joi.string().required(),
        color: Joi.string().required(),
        icon: Joi.string().required(),
        image: Joi.string().required()

    });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    // validate request body against schema
    const {
        error,
        value
    } = schema.validate(req.body, options);

    if (error) {
        // on fail return comma separated errors
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;
        next();
    }
}
