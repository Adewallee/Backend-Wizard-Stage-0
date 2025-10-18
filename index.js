// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get('/me', async (req, res) => {
  try {
    const catResponse = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = catResponse.data.fact;

    const response = {
      status: "success",
      user: {
        email: "gafarakanni27@gmail.com",
        name: "Gafar Akanni",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response);
  } catch (error) {
    res.status(503).json({
      status: "error",
      message: "Failed to fetch cat fact",
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});