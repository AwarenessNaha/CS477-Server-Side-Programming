const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products',productController.getAllProducts);

router.post('/products',productController.save);

router.get('/products/:prodId', productController.findByProductId);

module.exports = router;