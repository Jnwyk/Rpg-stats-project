const bcrypt = require('bcrypt');
const User = require('../models/user.models.js');

exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({ success: true, msg: users});
    }
    catch(err){
        res.status(404).json({ success: false, msg: err.message || "Unknown error"});
    }
};

exports.createUser = async (req, res) => {
    const {username, password, email, profileImage, role} = req.body;
    const user = new User({ username, password, email, profileImage, role});
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err)
                throw err;
            user.password = hash;
        });
    });
    try{
        await user.save();
        res.status(201).json({ success: true, msg: user});
    }
    catch(err){
        res.status(409).json({ success: false, msg: err.message || "Unknown error"});
    }
};

exports.getOneUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({ success: true, msg: user});
    }
    catch(err){
        res.status(404).json({ success: false, msg: err.message || "Unknown error"});
    }
};

exports.updateUser = (req, res) => {
    res.send('SUCCESS');
};

exports.deleteUser = (req, res) => {
    res.send('SUCCESS');
};

exports.loginUser = async (req, res) => {
    res.send(req.user);
}