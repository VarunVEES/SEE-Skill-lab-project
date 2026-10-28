/* =========================
   REGISTER USER
========================= */

/* =========================
   REGISTER USER
========================= */

async function registerUser(){

    const name =
    document.getElementById('name').value;

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;



    if(
        name === '' ||
        email === '' ||
        password === ''
    ){

        alert('Please Fill All Fields');

        return;
    }



    const response =
    await fetch('http://localhost:3000/users/register', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            name,
            email,
            password

        })

    });



    const data =
    await response.json();



    if(data.success){

        alert('Registration Successful');

        window.location.href =
        'login.html';

    }

    else{

        alert(data.message);

    }

}



/* =========================
   LOGIN USER
========================= */

async function loginUser(){

    const email =
    document.getElementById('email').value;

    const password =
    document.getElementById('password').value;



    const response =
    await fetch('http://localhost:3000/users/login', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            email,
            password

        })

    });



    const data =
    await response.json();

if(data.success){

    localStorage.setItem(
        'loggedInUser',
        email
    );

    alert('Login Successful');

    window.location.href =
    'dashboard.html';

}
    else{

        alert('Invalid Email Or Password');

    }

}



/* =========================
   FETCH PRODUCTS
========================= */

async function fetchProducts(){

    const productsContainer =
    document.getElementById('productsContainer');



    if(!productsContainer) return;



    const response =
    await fetch('http://localhost:3000/products');



    const products =
    await response.json();



    productsContainer.innerHTML = '';



    products.forEach(product => {

        productsContainer.innerHTML += `

            <div class="product-card">

                <img src="${product.image}">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹ ${product.price}
                </p>

                <p>
                    ${product.description}
                </p>

                <button onclick="addToCart(
                    '${product.name}',
                    '${product.price}'
                )">

                    Add To Cart

                </button>

            </div>

        `;

    });

}



/* =========================
   ADD TO CART
========================= */

function addToCart(name, price){

    let cart =
    JSON.parse(
        localStorage.getItem('cart')
    ) || [];



    cart.push({

        name,
        price

    });



    localStorage.setItem(
        'cart',
        JSON.stringify(cart)
    );



    alert('Product Added To Cart');

}



/* =========================
   DISPLAY CART
========================= */

function displayCart(){

    const cartContainer =
    document.getElementById('cartContainer');



    const totalPrice =
    document.getElementById('totalPrice');



    if(!cartContainer) return;



    let cart =
    JSON.parse(
        localStorage.getItem('cart')
    ) || [];



    cartContainer.innerHTML = '';



    let total = 0;



    cart.forEach((item, index) => {

        total += Number(item.price);



        cartContainer.innerHTML += `

            <div class="cart-item">

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹ ${item.price}
                    </p>

                </div>



                <button
                class="remove-btn"

                onclick="removeCartItem(${index})">

                    Remove

                </button>

            </div>

        `;

    });



    if(totalPrice){

        totalPrice.innerHTML =
        `Total : ₹ ${total}`;

    }

}



/* =========================
   REMOVE CART ITEM
========================= */

function removeCartItem(index){

    let cart =
    JSON.parse(
        localStorage.getItem('cart')
    ) || [];



    cart.splice(index, 1);



    localStorage.setItem(

        'cart',

        JSON.stringify(cart)

    );



    displayCart();

}



/* =========================
   PLACE ORDER
========================= */

/* =========================
   PLACE ORDER
========================= */

async function placeOrder(){

    const customerName =
    document.getElementById('customerName').value;

    const address =
    document.getElementById('address').value;

    const phone =
    document.getElementById('phone').value;



    let cart =
    JSON.parse(
        localStorage.getItem('cart')
    ) || [];



    if(
        customerName === '' ||
        address === '' ||
        phone === ''
    ){

        alert('Please Fill All Fields');

        return;
    }



    if(cart.length === 0){

        alert('Cart Is Empty');

        return;

    }



    let total = 0;



    cart.forEach(item => {

        total += Number(item.price);

    });



    try{

        const response =
        await fetch('http://localhost:3000/orders', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                userEmail:
                localStorage.getItem(
                    'loggedInUser'
                ),

                customerName,
                address,
                phone,
                products: cart,
                totalPrice: total

            })

        });



        const data =
        await response.json();



        console.log(data);



        alert('Order Placed Successfully');



        localStorage.removeItem('cart');



        window.location.href =
        'order-success.html';

    }

    catch(error){

        console.log(error);

        alert('Order Failed');

    }

}



/* =========================
   FETCH MY ORDERS
========================= */

async function fetchOrders(){

    const ordersContainer =
    document.getElementById('ordersContainer');



    if(!ordersContainer) return;



    const response =
    await fetch('http://localhost:3000/orders');



    const orders =
    await response.json();



    ordersContainer.innerHTML = '';



    const loggedUser =
localStorage.getItem(
    'loggedInUser'
);



orders.forEach(order => {

    if(order.userEmail === loggedUser){

        ordersContainer.innerHTML += `

            <div class="order-card">

                <h3>
                    ${order.customerName}
                </h3>

                <p>
                    Address :
                    ${order.address}
                </p>

                <p>
                    Phone :
                    ${order.phone}
                </p>

                <p>
                    Total :
                    ₹ ${order.totalPrice}
                </p>

                <p class="order-status">

                    Order Placed Successfully

                </p>

            </div>

        `;

    }});

}



/* =========================
   AUTO FUNCTIONS
========================= */

fetchProducts();

displayCart();

fetchOrders();