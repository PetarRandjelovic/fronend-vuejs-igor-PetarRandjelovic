const express = require('express');
const { sequelize, Users} = require('./models');
/// const routes = require('./routes/adminRoutes');
/// Routes
//const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/usersRoutes');
const moviesRoutes=require('./routes/moviesRoutes');
const genreRoutes=require('./routes/genreRoutes');
const dimensionRoutes=require('./routes/dimensionRoutes');
const actorRoutes=require('./routes/actorRoutes');
const directorRoutes=require('./routes/directorRoutes');
const cinemaRoutes=require('./routes/cinemaRoutes');
const directingRoutes=require('./routes/directingRoutes');
const seatRoutes=require('./routes/seatRoutes');
const castRoutes=require('./routes/castRoutes');
const broadcastRoutes=require('./routes/broadcastRoutes');
const reservationRoutes=require('./routes/reservationRoutes');

const path = require('path');
const jwt = require('jsonwebtoken');
const { getMaxListeners } = require('process');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
const cors = require('cors');

var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200
}

///
app.use(cors(corsOptions));

app.use('/admin/users', usersRoutes);
app.use('/admin/movies',moviesRoutes);
app.use('/admin/genre',genreRoutes);
app.use('/admin/dimension',dimensionRoutes);
app.use('/admin/actor',actorRoutes);
app.use('/admin/director',directorRoutes);
app.use('/admin/cinema',cinemaRoutes);
app.use('/admin/directing',directingRoutes);
app.use('/admin/seat',seatRoutes);
app.use('/admin/cast',castRoutes);
app.use('/admin/broadcast',broadcastRoutes);
app.use('/admin/reservation',reservationRoutes);

app.listen({ port: 8090 }, async () => {
      await sequelize.authenticate();
});