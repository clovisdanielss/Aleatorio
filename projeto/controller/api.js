var userModel = require('../models/user');
var empresaModel = require('../models/empresa');
var mongoose  = require('mongoose');
var config = require('../config'); 
var express = require('express');
var apiLogger = require('../loggers/apiLogger').loggers.get('development');
var router = express.Router();

mongoose.connect(config.database);

//fazer validação entradas
//verificar numero de conexões mongoose
//delete empresa deleta users
//finalizar operações relacionadas
//adicionar logger de erro
//find verificar se user existe
//adicionar permissões




router.get('/', function(req, res) {
    apiLogger.log('info',"Api logger Running!");
    res.json({ message: 'API Running!' });   
});

router.route('/users')
        .post(function(req,res){
            empresaModel.findById(req.body.empresa,function(err,empresa){
                if(err){
                   apiLogger.log('error',err);
                }
                if(empresa){
                    var user = new userModel(req.body);
                    user.save(function(err){
                        if(err){
                            apiLogger.log('error','ocorrreu um erro',err);
                            res.status(401).json({message:"no possible to create user."});
                        }
                        res.status(201).json({message:"created user!"});
                    });
                }else res.status(401).json({message:"invalid empresa id"});
            })
        })

        .get(function(req,res){
            userModel
            .find()
            .populate('empresa','nome')
            .exec(function(err,users){
                if(err){
                    apiLogger.log('error','ocorrreu um erro',err);
                }
                res.status(200).json(users);
            });
        });

router.route('/users/:user_id')
        .put(function(req, res){
            userModel.findByIdAndUpdate(req.params.user_id,req.body,function(err,user){
                if(err)apiLogger.log('error','ocorrreu um erro',err);
                res.status(200).json({message:"successfull updated."});
            });
        })
        .get(function(req, res) {
            userModel.findById(req.params.user_id, function(err, user) {
                if (err)
                    apiLogger.log('error','ocorrreu um erro',err);
                if(user){
                    apiLogger.log('debug','usuario resgatado',user);
                    res.json(user);
                }else{
                    res.json({message:'user not found.'});
                }
            });
        })
        .delete(function(req, res){
            userModel.remove({id:req.params.user_id},function(err){
                if(err) apiLogger.log('error','ocorrreu um erro',err);
            });
        });

router.route('/empresas')

        .post(function(req,res){
            var empresa = new empresaModel(req.body);
            console.log(empresa);
            empresa.save(function(err){
                if(err)
                    apiLogger.log('error','ocorrreu um erro',err);
                res.json({message:'empresa created!'});
                }
            );
        })

        .get(function(req,res){
            empresaModel.find(function(err,users){
                if(err)
                    apiLogger.log('error','ocorrreu um erro',err);
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
                    apiLogger.log('error','ocorrreu um erro',err);
                res.json(user);
            });
        })
        .delete(function(req, res){
            empresaModel.remove({id:req.params.empresa_id},function(err){
                if(err) apiLogger.log('error','ocorrreu um erro',err);
            });
        });

router.route('/empresas/:empresa_id/users')
        .get(function(req, res) {

        });
module.exports = router;