const Joi = require('Joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(20).required(),
})

module.exports = {
    userSchema : userSchema,
}