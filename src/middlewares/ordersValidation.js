const Joi = require('joi');

exports.createOrderSchema = (req, res, next) => {
    // create schema object
    const schema = Joi.object({
        orderItem: Joi.string().required(),
        shippingAddress1: Joi.string().required(),
        shippingAddress2: Joi.string().required(),
        city: Joi.string().required(),
        zip: Joi.string().email().required(),
        country: Joi.string().min(6).required(),
        phone: Joi.number().required(),
        status: Joi.string().required(),
        totalPrice: Joi.number().required(),
        user: Joi.string().required(),//user
        date: Joi.date()//Date
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
