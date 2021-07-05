const Product = require('../models/product');

module.exports.getAllProducts = (req, res, next)=>{
    res.status(200),json(Product.getAll());
}
exports.save = (req,res, next)=>{
    const prod = new Product(null, req.body.title, req.body.price, req.body.description);
    res.json(prod.save());
}
exports.findByProductId = (req, res, next) => {
    const productId = req.params.prodId;
    res.json(Product,getProductById(productId));
}