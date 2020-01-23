const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const settingsModel = mongoose.model('sys_settings', settingsSchema);
module.exports = settingsModel;