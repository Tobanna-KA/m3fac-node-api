const mongoose = require('mongoose');

const medicalSchema = mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'user',
        required: true
    },
    gender: String,
    dob: Date,
    blood_grp: String,
    allergies: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'illnesses_and_allergies',
        required: true
    }],
    reoccurring_illness: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'illnesses_and_allergies',
        required: true
    }],
    next_of_kin: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'next_of_kins',
        required: true
    }],
    visits: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'visits'
    }]
});

const medicalModel = mongoose.model('medical', medicalSchema);
module.exports = medicalModel;