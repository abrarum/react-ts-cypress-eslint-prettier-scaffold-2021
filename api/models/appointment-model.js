const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    name: String,
    date_time: [
      {
        date: String,
        time: String,
        reason: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointment", Appointment);
