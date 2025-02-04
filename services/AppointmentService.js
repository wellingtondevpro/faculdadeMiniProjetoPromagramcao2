import AppointmentRepository from "../repositories/AppointmentRepository";
import req from "express/lib/request.js";

const getAppointment = async (id) => {
    try{
        return AppointmentRepository.getAppointment(id);
    }catch (error) {
        console.log(error);
    }
}

const getAllAppointments = async () => {
    try {
        return AppointmentRepository.getAllAppointments()
    }catch (error) {
        console.log(error);
    }
}

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        return await AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
    }catch (error) {

    }
}



const AppointmentService = {

    getAppointment,
    getAllAppointments,
    updateAppointment,
}

export default AppointmentService;
