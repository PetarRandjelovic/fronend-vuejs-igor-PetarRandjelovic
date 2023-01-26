const Joi = require('Joi');

const actorSchema = Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
  
})

module.exports = {
    actorSchema : actorSchema,
}