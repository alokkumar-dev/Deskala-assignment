const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
const connect = require("./configs/db");
const { login, register } = require("./controller/auth.controller");
const CORS = require("cors");
const userController = require("./controller/user.controller");

app.use(CORS());
app.use(express.json());
app.post("/register", register);
app.post("/login", login);



app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
