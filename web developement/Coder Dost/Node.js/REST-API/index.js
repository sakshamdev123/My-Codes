const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const index = fs.readFileSync('index.html', 'utf-8');
const productsData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = productsData.products;

const server = express();

// server.get('/demo', (req, res) => {
//     // res.sendStatus(404);
//     // res.json(products);
//     res.status(201).send('<h1>hello</h1>');
//     // res.sendFile(absolute path of file);
// })

// Middleware (Application level)
// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
//     // User-Agent is a known header. We can access headers via req.get() function
//     next();
// })

// body parser - reads req.body
server.use(express.json());

// Determines static folder
server.use(express.static('public'));

// server.use(morgan('default'));
server.use(morgan('dev'));

// reads data fron forms
// server.use(express.urlencoded());

// Route level middleware - only added to intended routes
const auth = (req, res, next) => {
    // if (req.query.password == '123') {
    if (req.body.password == '123') {
        next();
    } else {
        res.sendStatus(401); // Unauthorized
    }
}
// server.get('/', auth, (req, res) => {
//     res.json({type: 'GET'});
// })

// API - Endpoint - Route
// API root - Base URL

// C R U D - Create Read Update Delete
// Create POST /products
server.post('/products', (req, res) => {
    // console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
});
// Read GET /products
server.get('/products', (req, res) => {
    res.json(products);
});
// Read GET /products/:id
server.get('/products/:id', (req, res) => {
    // console.log(req.params);
    const id = +req.params.id; // + converts string numerical value to int
    const product = products.find(p => p.id === id);
    res.json(product);
});
// Update PUT /products/:id
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { id: id, ...req.body });
    res.status(201).send('<h1>Successful</h1>');
});
// Update PATCH /products/:id
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body}); // property coming later overwites the original property
    res.status(201).send('<h1>Successful</h1>');
});
// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1);
    res.send('<h1>Successful</h1>');
});

server.listen(8080, () => {
    console.log('server started');
});

// +-------------------------------------------------------------------------------+
// |                        HTTP response status codes                             |
// +--------------------+----------------------------------------------------------+
// |    Status code     |                    Description                           |
// +--------------------+----------------------------------------------------------+
// |     100 - 199      |               Informational responses                    |
// |     200 - 299      |                Successfull responses                     |
// |     300 - 399      |                 Redirection messages                     |
// |     400 - 499      |               Client error responses                     |
// |     500 - 599      |               Server error responses                     |
// +--------------------+----------------------------------------------------------+
// 200: OK    201: CREATED    202: ACCEPTED
// 301: MOVED PERMANENTLY   302: FOUND
// 400: BAD REQUEST   401: UNAUTHORIZED   403: FORBIDDEN    404: NOT FOUND   405: METHOD NOT ALLOWED
// 500: INTERNAL SERVICE ERROR    502: BAD GATEWAY

// +-------------------------------------------------------------------------------+
// |                                  REST API                                     |
// +------------+------------------+-----------------------------------------------+
// |    TYPE    |       METHOD     |                Description                    |
// +------------+------------------+-----------------------------------------------+
// |   CREATE   |        POST      |   Data in request body   |     /students      |
// |    READ    |        GET       |  Find data in URL params |    /students/:id   |
// |    READ    |        GET       |          No data         |     /students      |
// |   UPDATE   |       PATCH      |  Find data in URL params |    /students/:id   |
// |   UPDATE   |        PUT       |  Update data in req body |     /students      |
// |   DELETE   |       DELETE     |  Find data in url params |    /students/:id   |
// +------------+------------------+-----------------------------------------------+