const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    userEmail: String,

    customerName: String,

    address: String,

    phone: String,

    products: Array,

    totalPrice: Number

});

module.exports =
mongoose.model('Order', orderSchema);