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
