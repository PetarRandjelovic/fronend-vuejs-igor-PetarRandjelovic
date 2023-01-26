const Joi = require('Joi');

const seatSchema = Joi.object({
    SeatNumber: Joi.string().min(3).max(20).required(),
    cinemaID: Joi.number().required(),
})

module.exports = {
    seatSchema : seatSchema,
}