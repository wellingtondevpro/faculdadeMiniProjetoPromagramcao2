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

router.get("/getAppointment/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const appointments = await AppointmentService.getAllAppointments(id);
        res.send(appointments)
    }catch (err){
        res.status(500).send(err)
    }
})

router.post("/getAppointment/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const appointments = await AppointmentService.getAllAppointments(id);
        res.send(appointments)
    }catch (err){
        res.status(500).send(err)
    }
})


router.put("/updateAppointment/:id", async (req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try{
        const updateAppointment = await AppointmentService.updateAppointment(id, req.body);
    }catch(err){}
})

export default router();