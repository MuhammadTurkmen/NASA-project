const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");
const app = express();

app.use(cors());
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
