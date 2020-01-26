const IAndA = require('../models').illness_and_allergy;

module.exports.illness_and_allergy = {
    NEW: async (req, res) => {
        if(req.body.name && req.body.type && req.body.grade && req.body.symptoms) {
            let specialists = null;
            if(req.body.specialists) {
                specialists = req.body.specialists
            }
            let illness_and_allergy = await IAndA.create({
                name: req.body.name,
                type: req.body.type,
                grade: req.body.grade,
                symptoms: req.body.symptoms,
                specialists
            })

            if(!illness_and_allergy)
                return res.status(200).status({error: {message: 'All required fields not filled'}})

            return res.status(200).send({error: false, illness_and_allergy})
        } else {
            return res.status(200).status({error: {message: 'All required fields not filled'}})
        }
    },
    EDIT: async (req, res) => {
        if(req.body._id && req.body.name && req.body.type && req.body.grade && req.body.symptoms) {
            let specialists = null;
            if(req.body.specialists) {
                specialists = req.body.specialists
            }
            let illness_and_allergy = await IAndA.findByIdAndUpdate(req.body._id, {
                name: req.body.name,
                type: req.body.type,
                grade: req.body.grade,
                symptoms: req.body.symptoms,
                specialists
            }, {new: true});

            if(!illness_and_allergy)
                return res.status(200).status({error: {message: 'All required fields not filled'}})

            return res.status(200).send({error: false, message: 'Success', illness_and_allergy})
        } else {
            return res.status(200).status({error: {message: 'All required fields not filled'}})
        }
    },
    GET_BY_ID: async (req, res) => {
        if(req.body._id) {
            let illness_and_allergy = await IAndA.findById(req.body._id);
            if(!illness_and_allergy)
                return res.status(200).status({error: {message: 'All required fields not filled'}})

            res.status(200).send({error: false, message: 'Success', illness_and_allergy})
        } else {
            return res.status(200).status({error: {message: 'All required fields not filled'}})
        }
    },
    GET_BY_NAME: async (req, res) => {
        if(req.body.name) {
            console.log(req.body.name);
            let illness_and_allergy = await IAndA.find({name: req.body.name});
            if(!illness_and_allergy)
                return res.status(200).status({error: {message: 'All required fields not filled'}})

            res.status(200).send({error: false, message: 'Success', illness_and_allergy})
        } else {
            return res.status(200).status({error: {message: 'All required fields not filled'}})
        }
    },
    GET_ALL: async (req, res) => {
        let search = {};
        if(req.body.type) search = {type};

        let illnesses_and_allergies = await IAndA.find(search);
        if(!illnesses_and_allergies)
            return res.status(200).status({error: {message: 'All required fields not filled'}})

        res.status(200).send({error: false, message: 'Success', illnesses_and_allergies})
    },
};