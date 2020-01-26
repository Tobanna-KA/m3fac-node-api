const mongoose = require('mongoose');

const visitSchema = mongoose.Schema({

    attending_personnel: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'personnels'
    }],
    check_in_time: {
        type: Date,
        default: new Date()
    },
    discharge_time: Date
});

const visitModel = mongoose.model('medical', visitSchema);
module.exports = visitModel;