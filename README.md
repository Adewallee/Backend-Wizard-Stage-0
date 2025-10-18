# Backend Wizards Stage 0 — Dynamic Profile Endpoint

This project is a simple RESTful API built with Node.js and Express for the Backend Wizards Stage 0 task. It returns profile information along with a dynamic cat fact fetched from the Cat Facts API.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Adewallee/Backend-Wizard-Stage-0.git
   cd Backend-Wizard-Stage-0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## How to Run Locally

- Make sure Node.js is installed
- Run `npm install` to install dependencies
- Use `npm run dev` to start the server with nodemon
- Visit `http://localhost:3000/me` in your browser or Postman

## Dependencies

- express
- axios
- dotenv
- cors
- nodemon (dev)

## Environment Variables

- `PORT`: Port number for the server (default is 3000)

## Sample Response
```json
{
  "status": "success",
  "user": {
    "email": "gafar.akanni@example.com",
    "name": "Gafar Akanni",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

## Notes on Error Handling

- If the Cat Facts API fails, a fallback message is returned:
  ```json
  {
    "status": "success",
    "user": { ... },
    "timestamp": "...",
    "fact": "Could not fetch a cat fact at this time. Please try again later."
  }
  ```
- Timeout for external API is set to 5 seconds
- Errors are logged to the console

---

<<<<<<< HEAD
Feel free to fork and improve this project. Happy coding!
=======
Feel free to fork and improve this project. Happy coding!
>>>>>>> de40b66 (Added a README file)
