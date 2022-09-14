const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profileImage: {
        type: String,
        default: 'none'
    },
    role: {
        type: ['admin', 'user'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
},
{ timestamps: false });

const User = mongoose.model('User', schema);

module.exports = User;