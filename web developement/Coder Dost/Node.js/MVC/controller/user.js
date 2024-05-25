const fs = require('fs');

const usersData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = usersData.users;

exports.createUser = (req, res) => {
    users.push(req.body);
    res.status(201).json(req.body);
};
exports.getAllUsers = (req, res) => {
    res.json(users);
};
exports.getUser = (req, res) => {
    const id = +req.params.id;
    const user = users.find(p => p.id === id);
    res.json(user);
};
exports.replaceUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);
    users.splice(userIndex, 1, { id: id, ...req.body });
    res.status(201).json();
};
exports.updateUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body });
    res.status(201).json();
};
exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1);
    res.json(user);
};