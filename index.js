require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/api", (req, res) => {
    res.json({ message: "API is operational." })
})

app.use((err, res, req, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
});

app.use("*", (req, res) => {
    res.send("<div><h1>Hello</h1><p>Welcome to the API</p></div>")
});

app.listen(PORT, () => {
    console.log("Server up and running. Fun things happening here");
});