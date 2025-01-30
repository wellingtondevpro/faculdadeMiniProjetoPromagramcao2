import Appointment from "../models/Appointment";

const appointment = require("../models/appointment");

const getAllAppointments = async () => {
    return await appointment.find();
}

const getAppointment = async (id) => {
    try{
        return await appointment.findById(id);
    }catch (erro){
        throw new erro("No hay en el appointment" + error);
    }
}

const saveAppointment = async ({date, doctorId, pacienteId,}) => {
    try{
        const prescription = new Appointment(date, doctorId, pacienteId);
        return await prescription.save();
    }catch (erro){
        throw new erro("No hay en el appointment" + error);
    }
}

const AppointmentRepository = {



}

export default AppointmentRepository;
