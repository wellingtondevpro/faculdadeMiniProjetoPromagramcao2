const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'Appointment date is required'],
    },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: [true, 'Appointment ID is required'],
    },
    medicine: {
        type: String,
        required: [true, 'Medicine required'],
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required'],
    },
    instructions: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
