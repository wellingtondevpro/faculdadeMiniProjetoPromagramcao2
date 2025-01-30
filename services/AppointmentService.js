import AppointmentRepository from "../repositories/AppointmentRepository";

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





const AppointmentService = {


}

export default AppointmentService;
