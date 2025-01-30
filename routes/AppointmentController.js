import express from "express";
import AppointmentService from "../services/AppointmentService";
const router = express.Router();


router.get("/appointments", async (req, res) => {
    try {
        const appointment = await AppointmentService.getAllAppointments();
        res.send(appointment);
    }catch(err) {
        res.status(500).send(err)
    }
})

router.get("/getAppointments/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments)
    }catch (err){
        res.status(500).send(err)
    }
})

export default router();