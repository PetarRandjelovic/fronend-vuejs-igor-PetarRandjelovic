const Joi = require('Joi');

const movieSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    genreID: Joi.number().required(),
})

module.exports = {
    movieSchema : movieSchema,
}