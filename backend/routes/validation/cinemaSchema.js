const Joi = require('Joi');

const cinemaSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
 
})

module.exports = {
    cinemaSchema : cinemaSchema,
}