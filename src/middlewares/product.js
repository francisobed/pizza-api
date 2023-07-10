const Joi = require('joi');

exports.createOrderSchema = (req, res, next) => {
    // create schema object
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        richDescription: Joi.string().required(),
        image: Joi.string().required(),
        images: Joi.string().email().required(),
        brand: Joi.string().min(6).required(),
        price: Joi.number().required(),
        category: Joi.string().required(),//Category
        countInStock: Joi.number().required(),
        rating: Joi.number(),//user
        isFeatured: Joi.boolean(),
        dateCreated: Joi.date()//Date
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
