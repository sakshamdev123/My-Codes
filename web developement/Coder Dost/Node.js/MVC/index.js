const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const server = express();

server.use(express.json());
server.use(express.static('public'));
server.use(morgan('dev'));

// Middleware
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, () => {
    console.log('server started');
});