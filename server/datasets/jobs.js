var mongoose = require('mongoose');

module.exports = mongoose.model('Jobs', {
    jobid: String,
    title: String,
    qulification: String,
    Jdes: String,
    closing: String,
    education: String,
    district: String
});