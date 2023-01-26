const Joi = require('Joi');

const directingSchema = Joi.object({
    directorID: Joi.number().required(),
    movieID: Joi.number().required(),
    teamDirectors: Joi.string().min(3).max(20).required(),
})

module.exports = {
    directingSchema : directingSchema,
}