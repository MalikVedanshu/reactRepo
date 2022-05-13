import express from "express";
const app = express();
import './dbConnect.js';
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`App started at ${port}`);
});


