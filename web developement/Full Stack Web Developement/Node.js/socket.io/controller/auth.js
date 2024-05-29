const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8');
const model = require('../model/user');
const User = model.User;

exports.signup = (req, res) => {
    const user = new User(req.body);
    const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
    const hash = bcrypt.hashSync(req.body.password, 10); // second parameter - saltRounds - no of times the password is encrypted
    user.token = token;
    user.password = hash;
    user.save()
        .then(doc => res.status(201).json({ token }))
        .catch(err => res.status(400).json(err));
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((doc) => {
            const isAuth = bcrypt.compareSync(req.body.password, doc.password);
            if (isAuth) {
                const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
                doc.token = token;
                doc.save()
                    .then(() => { res.json({ token }) })
                    .catch((err) => res.status(401).json(err));
            } else { res.sendStatus(401); }
        })
        .catch((err) => res.status(401).json(err));
};