const Joi = require('Joi');

const castSchema = Joi.object({
    actorID: Joi.number().required(),
    movieID: Joi.number().required(),
    
})

module.exports = {
    castSchema : castSchema,
}