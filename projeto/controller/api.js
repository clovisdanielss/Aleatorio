var userModel = require('../models/user');
var mongoose  = require('mongoose');
var config = require('../config'); 
var express = require('express');
var router = express.Router();

mongoose.connect(config.database);

router.get('/', function(req, res) {
    res.json({ message: 'API Running!' });   
});


router.route('/users')

        .post(function(req,res){
            var user = new userModel(req.body);
            user.save(function(err){
                if(err)
                    res.send(err);
                res.json({message:'user created!'});
                }
            );
        })

        .get(function(req,res){
            userModel.find(function(err,users){
                if(err)
                    res.send(err);
                res.json(users);
            })
        });

router.route('/users/:user_id')
        .put(function(req, res){
            userModel.findByIdAndUpdate(req.params.user_id);
        })
        .get(function(req, res) {
            userModel.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        });

module.exports = router;