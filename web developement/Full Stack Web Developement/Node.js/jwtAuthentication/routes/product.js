const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

// MVC - Model View Control

router
    .post('/', productController.createProduct)
    .get('/', productController.getAllProducts)
    .get('/ssr', productController.getAllProductsSSR)
    .get('/add', productController.getAllProductsAdd)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router;