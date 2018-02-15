var express = require('express');
var userModel = require('../models/user');
var mongoose  = require('mongoose');
var config = require('../config'); 
var jwt =  require('jsonwebtoken');


mongoose.connect(config.database);

var router = express.Router();

router.get("/setup",function(req,res){
    var newUser = userModel();
    newUser.username= "admin";
    newUser.password = "123456";
    newUser.nivel = "adm";
    newUser.save(function(err){
        if(err){
            res.status(200).json({message:"already done!"});
            return;
        }
        res.status(200).json({message:"sucessfull!"});;
    });
})


router.post("/login", function(req, res) {
    console.log(req.body);
    if(req.body.user && req.body.pass){
        var name = req.body.user;
        var password = req.body.pass;
    
        userModel.findOne({username: name}, function(err, user) {
            if (err) {
            console.log(err)
            }
            if (user) {
                user.comparePassword(password,function(err,isMatch){
                    if(isMatch&!err){
                        var payload = {id: user.id,nivel: user.nivel};
                        var token = jwt.sign(payload, config.secret,{expiresIn:1440});
                        res.json({message: "ok", token: token, id: payload.id});
                    }else res.status(401).json({message:"passwords did not match."});
                })
            } else {
                res.status(401).json({message:"user not found."});
            }
        });
    }
    else{
        res.status(401).json({message:"incomplete"});
    }
  });


module.exports = router;