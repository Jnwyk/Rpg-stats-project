require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const app = express();

const userRoutes = require('./routes/user.routes.js');
const gameRoutes = require('./routes/game.routes.js');

require('./services/passport.js');

const host = process.env.HOST;
const port = process.env.PORT || 5000;
const databaseUrl = process.env.DB_URL;

app.use(cors());
app.use(express.json());

//session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

mongoose
    .connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("Connected to the database");})
    .catch(err => {
        console.log("Couldnt connect to the database", err);
        process.exit();
    })

app.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: "HOMEPAGE OF RPG_STATS" });
})

app.use('/users', userRoutes);

app.get('*', (req, res) => {
    res.status(404).json({ success: false, msg: "Unknown route" });
})


app.listen(port, host, () => console.log(`Server is listening at http://${host}:${port}`));