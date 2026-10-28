/* =========================
   ADMIN LOGIN
========================= */

function adminLogin(){

    const username =
    document.getElementById('adminUsername').value;

    const password =
    document.getElementById('adminPassword').value;



    if(
        username === 'admin' &&
        password === 'admin123'
    ){

        alert('Admin Login Successful');



        window.location.href =
        'admin-dashboard.html';

    }

    else{

        alert('Invalid Admin Login');

    }

}



/* =========================
   ADD PRODUCT
========================= */

async function addProduct(){

    const name =
    document.getElementById('name').value;

    const price =
    document.getElementById('price').value;

    const image =
    document.getElementById('image').value;

    const description =
    document.getElementById('description').value;



    if(
        name === '' ||
        price === '' ||
        image === '' ||
        description === ''
    ){

        alert('Please Fill All Fields');

        return;
    }



    await fetch('http://localhost:3000/products', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            name,
            price,
            image,
            description

        })

    });



    alert('Product Added Successfully');



    document.getElementById('name').value = '';

    document.getElementById('price').value = '';

    document.getElementById('image').value = '';

    document.getElementById('description').value = '';

}



/* =========================
   FETCH ALL ORDERS
========================= */

/* =========================
   FETCH ALL ORDERS
========================= */

async function fetchAdminOrders(){

    const ordersContainer =
    document.getElementById(
        'ordersContainer'
    );



    if(!ordersContainer) return;



    try{

        const response =
        await fetch('http://localhost:3000/orders');



        const orders =
        await response.json();



        ordersContainer.innerHTML = '';



        if(orders.length === 0){

            ordersContainer.innerHTML = `

                <div class="order-box-admin">

                    <h3>
                        No Orders Found
                    </h3>

                </div>

            `;

            return;

        }



        orders.forEach(order => {

            ordersContainer.innerHTML += `

                <div class="order-box-admin">

                    <h3>
                        ${order.customerName}
                    </h3>

                    <p>

                        Email :
                        ${order.userEmail}

                    </p>

                    <p>

                        Address :
                        ${order.address}

                    </p>

                    <p>

                        Phone :
                        ${order.phone}

                    </p>

                    <p class="order-total">

                        Total :
                        ₹ ${order.totalPrice}

                    </p>

                </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}


/* =========================
   FETCH CUSTOMERS
========================= */

async function fetchCustomers(){

    const customersContainer =
    document.getElementById('customersContainer');



    if(!customersContainer) return;



    const response =
    await fetch('http://localhost:3000/users/all');



    const customers =
    await response.json();



    customersContainer.innerHTML = '';



    customers.forEach(customer => {

        customersContainer.innerHTML += `

            <div class="customer-card">

                <h3>
                    ${customer.name}
                </h3>

                <p>
                    ${customer.email}
                </p>

            </div>

        `;

    });

}



/* =========================
   AUTO FUNCTIONS
========================= */

fetchAdminOrders();

fetchCustomers();