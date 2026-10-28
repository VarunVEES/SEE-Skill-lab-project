const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');



const app = express();



/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());





/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect(
    'mongodb://127.0.0.1:27017/studentkart'
)

.then(() => {

    console.log('MongoDB Connected');

})

.catch((err) => {

    console.log(err);

});



/* =========================
   ROUTES
========================= */

const userRoutes =
require('./routes/userRoutes');

const productRoutes =
require('./routes/productRoutes');

const orderRoutes =
require('./routes/orderRoutes');



app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);



/* =========================
   HOME ROUTE
========================= */

app.get('/', (req, res) => {
    res.json({
        message: 'StudentKart backend API is running',
        endpoints: ['/users', '/products', '/orders']
    });
});



/* =========================
   SERVER
========================= */

app.listen(3000, () => {

    console.log(
        'Server Running On Port 3000'
    );

});