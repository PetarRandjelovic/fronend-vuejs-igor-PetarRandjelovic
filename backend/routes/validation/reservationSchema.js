const Joi = require('Joi');

const reservationSchema = Joi.object({
    Name: Joi.string().min(3).max(20).required(),
    broadcastID: Joi.number().required(),
    seatID: Joi.number().required(),
    userID: Joi.number().required(),
   
})

module.exports = {
    reservationSchema : reservationSchema,
}