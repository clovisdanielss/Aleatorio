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
                            apiLogger.log('error','ocorreu um erro',err);
                            res.status(401).json({message:"não foi possivel encontra usuário."});
                        }
                        res.status(201).json({message:"usuário encontrado."});
                    });
                }else res.status(401).json({message:"id de empresa inválido."});
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
                if(users){
                    res.status(200).json(users);
                }
                else res.status(404).json({message:'usuários não encontrados'});
            });
        });

router.route('/users/:user_id')
        .put(function(req, res){
            userModel.findByIdAndUpdate(req.params.user_id,req.body,function(err){
                if(err)apiLogger.log('error','ocorrreu um erro',err);
                res.status(200).json({message:"successfull updated."});
            });
        })
        .get(function(req, res) {
            userModel.findById(req.params.user_id, function(err, user) {
                if (err)
                    apiLogger.log('error','ocorreu um erro',err);
                if(user){
                    res.status(200).json(user);
                }else{
                    res.status(404).json({message:'user not found.'});
                }
            });
        })
        .delete(function(req, res){
            userModel.remove({id:req.params.user_id},function(err){
                if(err){apiLogger.log('error','ocorreu um erro',err);}
            });
        });

router.route('/empresas')

        .post(function(req,res){
            var empresa = new empresaModel(req.body);
            empresa.save(function(err){
                if(err){
                    apiLogger.log('error','ocorrreu um erro',err);
                    res.status(401).json({message:'empresa invalida.'});
                }
                res.status(201).json({message:'empresa created!'});
                }
            );
        })

        .get(function(req,res){
            empresaModel.find(function(err,empresas){
                if(err)
                    apiLogger.log('error','ocorrreu um erro',err);
                if(empresas){
                    res.status(200).json(empresas);
                }else{
                    res.status(404).json({message:'empresa não encontrada.'});
                }
            })
        });

router.route('/empresas/:empresa_id')
        .put(function(req, res){
            empresaModel.findByIdAndUpdate(req.params.empresa_id,req.body,function(err){
                if(err) apiLogger('error','ocorreu um erro',err);
            });
        })
        .get(function(req, res) {
            empresaModel.findById(req.params.empresa_id, function(err, empresa) {
                if (err)
                    apiLogger.log('error','ocorrreu um erro',err);
                if(empresa){
                    res.status(200).json(empresa);
                }else res.status(404).json({message:'empresa não encontrada.'})
            });
        })
        .delete(function(req, res){
            empresaModel.remove({id:req.params.empresa_id},function(err){
                if(err) apiLogger.log('error','ocorrreu um erro',err);
            });
        });

router.route('/empresas/:empresa_id/users')
        .get(function(req, res) {
            userModel.find({empresa:empresa_id},function(err,users){
                if(err)
                    apiLogger.log('error','ocorrreu um erro',err);
                if(users){
                    res.status(200).json(users);
                }else{
                    res.status(404).json({message:'usuário não encontrado.'});
                }
            })
        });
module.exports = router;