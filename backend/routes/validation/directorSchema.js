const Joi = require('Joi');

const directorSchema = Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    
})

module.exports = {
    directorSchema : directorSchema,
}