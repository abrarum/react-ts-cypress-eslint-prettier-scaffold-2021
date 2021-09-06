const express = require("express");

const AppointmentCtrl = require("../controllers/appointment-ctrl");

const router = express.Router();

router.post("/appointment", AppointmentCtrl.createAppointment);
router.get("/appointment/:name", AppointmentCtrl.getAppointmentByName);
router.get("/appointments", AppointmentCtrl.getAppointments);
router.put("/appointment/:name", AppointmentCtrl.updateAppointment);

module.exports = router;
