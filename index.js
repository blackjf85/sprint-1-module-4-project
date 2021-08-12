const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
    console.log("Server up and running. Fun things happening here");
});