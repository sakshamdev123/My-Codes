const ejs = require('ejs');
const path = require('path');
const model = require('../model/user');
const User = model.User;

exports.getAllUsersSSR = (req, res) => { // Server Side Rendering
    User.find()
        .then(doc =>
            ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), { users: doc }, function (err, str) {
                res.status(201).send(str);
            })
        )
        .catch(err => res.status(404).json(err));
};
exports.getAllUsersAdd = (req, res) => { // Server Side Rendering
    User.find()
        .then(doc =>
            ejs.renderFile(path.resolve(__dirname, '../pages/forms.ejs'), { users: doc }, function (err, str) {
                res.status(201).send(str);
            })
        )
        .catch(err => res.status(404).json(err));
};
exports.getAllUsers = (req, res) => {
    User.find()
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(404).json(err));
};
exports.getUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(404).json(err));
};
exports.replaceUser = (req, res) => {
    const id = req.params.id;
    User.findOneAndReplace({ _id: id }, req.body, { new: true })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(400).json(err));
};
exports.updateUser = (req, res) => {
    const id = req.params.id;
    User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(400).json(err));
};
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findOneAndDelete({ _id: id })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(404).json(err));
};