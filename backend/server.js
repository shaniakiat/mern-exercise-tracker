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

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database Connection Successful!!"))
  .catch(err => console.error(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/exercises");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
