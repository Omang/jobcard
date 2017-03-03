var mongoose = require('mongoose');
var Jobs = require('../datasets/jobs');


module.exports.jobCreate = function(req, res){
     console.log(req.body);
   var job_userid = req.body.userid;
   var job_title = req.body.title;
   var job_qulification = req.body.qulification;
   var job_description = req.body.aboutjob;
    
   var job_expdate = req.body.jobdate;
    job_expdate = job_expdate.replace(':','.');
    job_expdate = job_expdate.replace(':','.');
    job_expdate = job_expdate.replace(':','.');
    job_expdate = job_expdate.replace(':','.');
    
   var job_education = req.body.education;
   var job_district = req.body.district;
    
    var jobs = new Jobs();
        jobs.jobid = job_userid;
        jobs.title = job_title;
        jobs.qulification = job_qulification;
        jobs.Jdes = job_description;
        jobs.closing = job_expdate;
        jobs.education = job_education;
        jobs.district = job_district;
        
        jobs.save(function(err, results){
            if(err){
                res.error(err);
            }else{
                res.json(results);
            }
        });
    
}
module.exports.checkJob = function(req, res){
    var userid = req.body.userid;
    Jobs.find({jobid: userid}, function(err, results){
        if(err){
            res.error(err);
        }else{
            res.json(results);
        }
    });
}

module.exports.getCard = function(req, res){
    
    Jobs.find({}, function(err, results){
        if(err){
            res.error(error);
        }else{
            res.json(results).status(200);
        }
    });
}

