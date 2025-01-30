const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'Appointment date is required'],
    },
    pacientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: [true, 'Paciente ID is required'],
    },
    birthDate: {
        type: Date,
        required: [true, 'birthDate required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Pacient = mongoose.model('Prescription', pacientSchema);

module.exports = Pacient;
