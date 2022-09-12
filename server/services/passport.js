const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models/user.models.js');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy( { usernameField: 'username'}, async (username, password, done) => {
        const user = await User.findOne({ username: username})
            if(!user){
                return done(null, false, { success: false, msg: "Wrong username"})
            }
            else{
                bcrypt.compare(password, user.password, (err, isMatch) =>{
                    if(err)
                        return done(err);
                    if(isMatch)
                        return done(null, user);
                    else{
                        return done(null, false, { success: false, msg: "Wrong password"});
                    }
                })
            }
    }))

module.exports = passport;