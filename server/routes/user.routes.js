const express = require('express');
const passport = require('passport');
const { getUsers, createUser, getOneUser, updateUser, deleteUser, loginUser } = require('../controllers/user.controllers.js');

const router = express.Router();

router.route('/')
    .get(getUsers)

router.route('/:id')
    .get(getOneUser)
    .patch(updateUser)
    .delete(deleteUser)

router.route('/login')
    .post(passport.authenticate('local', {failureRedirect: '/login'}),  loginUser)

router.route('/register')
    .post(createUser)

module.exports = router;