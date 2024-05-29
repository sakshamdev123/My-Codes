const model = require('../model/product');
const Product = model.Product;

exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(400).json(err));
};
exports.getAllProducts = (req, res) => {
    Product.find()
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(404).json(err));
};
exports.getProduct = (req, res) => {
    const id = req.params.id;
    Product.findById(id)
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(404).json(err));
};
exports.replaceProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(400).json(err));
};
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        .then(doc => res.status(201).json(doc))
        .catch(err => res.status(400).json(err));
};
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.findOneAndDelete({_id: id})
        .then(doc=>res.status(201).json(doc))
        .catch(err=>res.status(404).json(err));
};