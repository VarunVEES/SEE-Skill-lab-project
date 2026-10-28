const express = require('express');

const router = express.Router();

const Order =
require('../models/Order');



/* =========================
   PLACE ORDER
========================= */

router.post('/',
async (req, res) => {

    const order = new Order({
        userEmail: 
        req.body.userEmail,
        customerName:
        req.body.customerName,

        address:
        req.body.address,

        phone:
        req.body.phone,

        products:
        req.body.products,

        totalPrice:
        req.body.totalPrice , 
        

    });



    await order.save();



    res.json(order);

});



/* =========================
   GET ORDERS
========================= */

router.get('/',
async (req, res) => {

    const orders =
    await Order.find();



    res.json(orders);

});



module.exports = router;