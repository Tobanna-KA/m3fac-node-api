const mongoose = require('mongoose');

const kinSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_phone_no: {
        type: String,
        required: true
    }
});

const kinModel = mongoose.model('next_of_kins', kinSchema);
module.exports = kinModel;