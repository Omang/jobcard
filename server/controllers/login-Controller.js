var mongoose = require('mongoose');
var Users = require('../datasets/users');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports.loginUser = function(req, res){
   var Username = req.body.username;
   var password = req.body.password;

 
        Users.findOne({username: Username}).exec(function(err, user){
           if(err){
               res.error(err);
           }else{
              if(user !== null){
                 var salt = user.salt;
                 var hash = user.hash;
                 var verifypass = crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
                  if(verifypass === hash){
                    var token = jwt.sign({
                      userid: user._id,
                      username: user.username,
                      email: user.email,
                      }, "My_stuff");
                      res.json(token);
                      
                  }else{
                      res.json({ msg: 'wrong password'});
                  }
                  
              }else{
               console.log('user not found');
               res.json({msg: 'user not found'});
            }
           }
        });
    
    
    
}