const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profileImage: String,
    role: ['admin', 'user'],
    createdAt: {
        type: Date,
        default: new Date()
    }
},
{ timestamps: false });

const User = mongoose.model('User', schema);

module.exports = User;