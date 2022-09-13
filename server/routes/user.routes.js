const express = require('express');
const passport = require('passport');
const { getUsers, createUser, getOneUser, updateUser, deleteUser, loginUser, logoutUser } = require('../controllers/user.controllers.js');

const router = express.Router();

router.route('/')
    .get(getUsers)

router.route('/login')
    .post(passport.authenticate('local', {failureRedirect: '/users/login'}),  loginUser)

router.route('/logout')
    .get(logoutUser);

router.route('/register')
    .post(createUser);

router.route('/:id')
    .get(getOneUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;