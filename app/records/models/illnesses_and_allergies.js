const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:  {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    symptoms: [{
        type: String,
        required: true
    }],
    specialists: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'personnels'
    }]
});

const model = mongoose.model('illnesses_and_allergies', schema);
module.exports = model;