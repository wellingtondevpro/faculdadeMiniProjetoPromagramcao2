import Appointment from "../models/appointment";

const getAllAppointments = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try{
        return await Appointment.findById(id);
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

const updateAppointment = async (id, {date, doctorId, pacientId}) => {
    try{
        return await Appointment.findByIdAndUpdate(id ,{date, doctorId, pacientId}, {new: true});
    }catch (erro){

    }
}

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndDelete(id);
    }catch (error) {
        throw new error("No hay en el appointment" + error);
    }
}


const appointmentRepository = {
    getAppointment,
    getAllAppointments,
    saveAppointment,
    updateAppointment,
    deleteAppointment,
}

export default appointmentRepository;
