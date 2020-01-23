const mongoose = require('mongoose');

const PersonnelSchema = mongoose.Schema({
    personal_det: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'users',
        required: true
    },
    type: {
        type: String
    }
});

const PersonnelModel = mongoose.model('personnels', PersonnelSchema);
module.exports  = PersonnelModel;