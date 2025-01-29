const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Doctor ID is required'],
    },
    name: {
        type: String,
        required: [true, 'Doctor Name is required'],
    },
    login: {
        type: String,
        required: [true, 'Doctor login is required'],
        unique: [true, 'Doctor login is unique'],
    },
    password: {
        type: String,
        required: [true, 'Doctor password is required'],
    },
    medicalEspecialty: {
        type: String,
        required: [true, 'Doctor medicalEspecialty is required'],
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Doctor medicalRegistration is required'],
        unique: [true, 'Doctor medicalRegistration is unique'],
    },
    email: {
        type: String,
        required: [true, 'Doctor email is required'],
        unique: [true, 'Doctor email is unique'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Doctor email is required'],
        unique: [true, 'Doctor email is unique'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Doctor = mongoose.model('Appointment', doctorSchema);

module.exports = Doctor;
