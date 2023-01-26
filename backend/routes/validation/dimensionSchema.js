const Joi = require('Joi');

const dimensionSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
 
})

module.exports = {
    dimensionSchema : dimensionSchema,
}