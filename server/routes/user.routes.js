const express = require('express');
const { getUsers, createUser, getOneUser, updateUser, deleteUser } = require('../controllers/user.controllers.js');

const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getOneUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;