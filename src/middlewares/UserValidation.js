exports.user = (req,res,next) => {
    
    const schema = Joi.object({
        name :Joi.required(),
        email:Joi.string().required(),
        username:Joi.string().required(),
        password:Joi.string().required()
    });

    const result = schema.validate(req.body,  { allowUnknown: false });

    if(result.error)
        return errorResponse(res, result.error.details[0].message.replace(/['"]/g, ''), 422);

    next();
};