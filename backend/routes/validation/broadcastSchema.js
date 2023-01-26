const Joi = require('Joi');

const broadcastSchema = Joi.object({
    dimensionID: Joi.number().required(),
    cinemaID: Joi.number().required(),
    movieID: Joi.number().required(),
   
})

module.exports = {
    broadcastSchema : broadcastSchema,
}