const express = require('express');

const router = express.Router();

const Product =
require('../models/Product');



/* =========================
   GET PRODUCTS
========================= */

router.get('/',
async (req, res) => {

    const products =
    await Product.find();



    res.json(products);

});



/* =========================
   ADD PRODUCT
========================= */

router.post('/',
async (req, res) => {

    const product = new Product({

        name: req.body.name,

        price: req.body.price,

        image: req.body.image,

        description: req.body.description

    });



    await product.save();



    res.json(product);

});



module.exports = router;