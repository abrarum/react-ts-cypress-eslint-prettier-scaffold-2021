const mongoose = require("mongoose");
const path = require('path')

require('dotenv').config({ path: '.env' });

console.log("process.env.REACT_APP_DB_URI", process.env.REACT_APP_DB_URI)

const DB_URI = process.env.REACT_APP_DB_URI

mongoose
  .connect(DB_URI, { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
