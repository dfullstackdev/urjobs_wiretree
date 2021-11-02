const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    hiringOrg: {type: String, required: true},
    agent: {type: String, required: true},
    empType: {type: String, required: true},
    location: {type: String, required: true},
    fullDescription: {type: String, required: true},
    smallDescription: {type: String, required: true},
    skillsRequired: {type: String, required: true},
    perks: {type: String, required: true},
    salaryFrom: {type: Number, required: false},
    salaryTo: {type: Number, required: false},
    addPay: {type: String, required: true},
    benefits: {type: String, required: true},
    schedule: {type: String, required: true},
    remote: {type: String, required: true},
    notes: {type: String, required: true},
    appliedCandidates: {type: [], required: true},
    postedBy: {type: String, required: true},
},{
    timestamps : true,
})

const jobModel = new mongoose.model('jobs', jobSchema)
module.exports = jobModel