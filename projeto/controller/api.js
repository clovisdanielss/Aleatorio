var userModel = require('../models/user');
var empresaModel = require('../models/empresa');
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
            userModel.findByIdAndUpdate(req.params.user_id,req.body);
        })
        .get(function(req, res) {
            userModel.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })
        .delete(function(req, res){
            userModel.remove({id:req.params.user_id},function(err){
                if(err) res.send(err);
            });
        });

router.route('/empresas')

        .post(function(req,res){
            var empresa = new empresaModel(req.body);
            empresa.save(function(err){
                if(err)
                    res.send(err);
                res.json({message:'empresa created!'});
                }
            );
        })

        .get(function(req,res){
            empresaModel.find(function(err,users){
                if(err)
                    res.send(err);
                res.json(users);
            })
        });

router.route('/empresas/:empresa_id')
        .put(function(req, res){
            empresaModel.findByIdAndUpdate(req.params.empresa_id,req.body);
        })
        .get(function(req, res) {
            empresaModel.findById(req.params.empresa_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })
        .delete(function(req, res){
            empresaModel.remove({id:req.params.empresa_id},function(err){
                if(err) res.send(err);
            });
        });
router.route('/empresas/:empresa_id/users')
        .get(function(req, res) {

        });
module.exports = router;