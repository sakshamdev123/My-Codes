const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8'); // utf-8 directly read data as string no need to convert
const productsData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = productsData.products;

const jsonData = { age: 5 };
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/product')) {
        const id = req.url.split('/')[2];
        const product = products.find(p => p.id === (+id)) // + converts string numerical value to int
        console.log(product);
        if (product) {
            res.setHeader('Content-Type', 'text/html');
            let modifiedIndex = index.replace('**discount**', Math.trunc(product.discountPercentage))
                .replace('**url**', product.thumbnail)
                .replace('**name**', product.title)
                .replace('**price**', product.price)
                .replace('**original**', Math.trunc(((product.discountPercentage + 100) * product.price) / 100))
                .replace('**rating**', product.rating);
            res.end(modifiedIndex);
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Product not found</h1>');
        }
        return;
    }
    // console.log(req.url, req.method);
    // console.log('server started');
    // res.end('hello');
    // res.setHeader('Dummy', 'DummyValue'); // custom header
    // res.setHeader('Content-Type', 'application/json'); // Content-Type is a known header
    // res.setHeader('Content-Type', 'text/html');
    // res.end(index);
    // res.end(JSON.stringify(jsonData));
    // res.end('<h1>hello<h1>');
    // res.end(data);
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(productsData));
            break;
        default:
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Page Not Found</h1>')
    }
})

server.listen(8080);