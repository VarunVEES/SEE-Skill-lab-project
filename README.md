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
