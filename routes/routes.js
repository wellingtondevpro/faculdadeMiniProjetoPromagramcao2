import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientController from "./PacientController";
import prescriptionService from "../services/PrescriptionService";
import prescriptionController from "./PrescriptionController";

const express = require('express');
const req = require("express/lib/request");

var router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("GET /", req.url);
        res.status(200).json({message: "Welcome Back!"});
    }
)

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);


export default router;