// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

// Middlewares
app.use(cors({
    origin: ["https://strategic-dash.vercel.app", "https://strategic-chatbot.vercel.app"],
    credentials: true,
}));

const uri = process.env.MONGODB_URI;

// Connection to the database
mongoose
    .connect(uri)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database: ', error);
    });


app.use(bodyParser.json());

app.use('/', router);

// // middleware to parse incoming requests
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});;
