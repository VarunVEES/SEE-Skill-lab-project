const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    productName: String,

    price: Number

});

module.exports = mongoose.model('Cart', cartSchema);