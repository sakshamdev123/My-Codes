require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const http = require('http');
const socket = require('socket.io');
const fs = require('fs');
const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf-8');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const server = express();
const app = http.createServer(server);
const io = socket(app);

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
server.use('/products', productRouter.router);
server.use('/users', auth, userRouter.router);
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('clientMsg', (data) => { console.log({ data }) }); // message received by server
    socket.emit('serverMsg', { health: 50 }); // message sent by server
})

app.listen(process.env.PORT, () => {
    console.log('server started');
});