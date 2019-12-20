const express = require("express");
const cors = require("cors");
// connect with mongoDB
const mongoose = require("mongoose");

require("dotenv").config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
