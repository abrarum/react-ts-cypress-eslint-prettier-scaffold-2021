const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");
const appointmentRouter = require("./routes/appointment-router");

const PORT = 5000;

app.use(express.json());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", appointmentRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
