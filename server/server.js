//! IT SHOULD BE WORKING FINE


const express = require('express')
const app = express();
const port = 3000;
const db = require("./db");
const bodyParser = require("body-parser");
const router = require("./routes.js");

// 127.0.0.1:3000/ -> YOUR PUBLIC/Frontend
// 127.0.0.1:3000/api/cows - POST & GET requests

//! do not know if I need to keep these two lines
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//? look up at whatever is happening with the dirname
app.use(express.static(path.join(__dirname, '../client/public')))
app.use("/api", router);

//! might need to change this to 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports.app = app;
