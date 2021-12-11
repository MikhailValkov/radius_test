require("dotenv").config();

const express = require("express");
const middlewares = require("./middlewares");
const apiV1 = require("./api/v1");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: process.env.REQ_SIZE_LIMIT || "1mb" }));
app.use(middlewares.cors);
app.use("/api/v1", apiV1);

app.listen(port, () => {
  console.log(`server is up on ${port} port`);
});
