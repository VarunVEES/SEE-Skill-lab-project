<<<<<<< HEAD
# StudentKart Backend API

This folder contains the Node.js/Express API, Mongoose models, and route handlers.

## Requirements
- Node.js and npm
- MongoDB Community Server running locally

## Run
In a terminal opened in this `backend` folder:

```bash
npm install
npm start
```

The API uses MongoDB database `studentkart` at `mongodb://127.0.0.1:27017/studentkart` and listens on port `3000`.

Open `http://localhost:3000/` to verify the API is running.

## Current routes
- `GET /products` — list products
- `POST /products` — create product
- `POST /users/register` — register a user
- `POST /users/login` — log in
- `GET /users/all` — list users
- `POST /orders` — create an order
- `GET /orders` — list orders

## Important development notes
- This is a learning project, not production-ready.
- The supplied user route stores and compares passwords as plain text. Before public deployment, add password hashing (for example, bcrypt) and secure authentication/authorization.
- Admin login in the existing frontend is a hard-coded browser-side check and is not secure authorization.
- Add validation and consistent error handling to API routes before production.
- `routes/cartRoutes.js` is currently empty and is not mounted in `server.js`.
=======
# StudentKart Frontend

This folder contains the existing StudentKart HTML, CSS, browser JavaScript, and product images.

## Run it
1. Start the backend API first (see `../backend/README.md`).
2. Open this `frontend` folder in VS Code.
3. Use the **Live Server** extension and open `index.html` (commonly at `http://127.0.0.1:5500`).
4. The frontend JavaScript sends API requests to `http://localhost:3000`.

You can also keep using the original combined setup if you prefer, but this separated version is intended to run the frontend and backend independently.

## Frontend scope
- HTML pages and navigation
- CSS styling and responsive layout
- Browser-side JavaScript and localStorage cart behavior
- Calls to the backend product, user, and order APIs

## Note
The cart currently uses browser `localStorage`. The backend `routes/cartRoutes.js` is empty in the supplied project, so persistent server-side carts are not implemented yet.
>>>>>>> origin/feature/frontend
