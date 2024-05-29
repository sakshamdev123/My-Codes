require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const publicKey = fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const server = express();

server.use(cors());
server.use(express.urlencoded());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(morgan('dev'));

const auth = (req, res, next) => {
    try {
        const token = req.get('Authorization').split('Bearer ')[1];
        const decoded = jwt.verify(token, publicKey);
        if (decoded.email) { next(); }
        else { res.sendStatus(401); }
    } catch {
        res.sendStatus(401);
    }
};

server.use('/auth', authRouter.router);
server.use('/products', auth, productRouter.router);
server.use('/users', auth, userRouter.router);
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log('server started');
});