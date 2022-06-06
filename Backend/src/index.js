const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
const connect = require("./configs/db");

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
