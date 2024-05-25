require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const productRouter = require('./routes/product');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(morgan('dev'));

// Middleware
server.use('/products', productRouter.router);
server.use('*', (req, res) => { // react routing
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

server.listen(process.env.PORT, () => {
    console.log('server started');
});