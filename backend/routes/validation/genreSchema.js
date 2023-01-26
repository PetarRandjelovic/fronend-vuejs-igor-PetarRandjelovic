const Joi = require('Joi');

const genreSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
  
})

module.exports = {
    genreSchema : genreSchema,
}