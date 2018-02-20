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
//finalizar operações relacionadas
//adicionar permissões

var handleError = function(msg,res,err){
    apiLogger.log('erro',msg,err);
    res.status(500).json({message:"problema interno."});
}


router.get('/', function(req, res) {
    apiLogger.log('info',"Api logger Running!");
    res.json({ message: 'API Running!' });   
});

router.route('/users')
        .post(function(req,res){
            empresaModel.findById(req.body.empresa,function(err,empresa){
                if(err){
                    handleError('erro buscando empresa',res,err);
                    return;
                }
                if(empresa){
                    var user = new userModel(req.body);
                    user.save(function(err){
                        if(err){
                            handleError('erro criando usuário',res,err);
                            return;
                        }
                        else res.status(201).json({message:"usuário criado."});
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
                    handleError('erro buscando usuários',res,err);
                    return;
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
                if(err){
                   handleError('erro atualizando usuário',res,err);
                   return;
                }
                res.status(200).json({message:"atualizado."});
            });
        })
        .get(function(req, res) {
            userModel.findById(req.params.user_id, function(err, user) {
                if (err){
                    handleError('erro buscando usuário.',res,err);
                    return;
                }
                if(user){
                    res.status(200).json(user);
                }else{
                    res.status(404).json({message:'user não encontrado.'});
                }
            });
        })
        .delete(function(req, res){
            userModel.remove({_id:req.params.user_id},function(err){
                if(err){
                    handleError('erro deletando usuário',res,err);
                    return;
                }
                res.status(200).json({message:'deletado com sucesso'});
            });
        });

router.route('/empresas')

        .post(function(req,res){
            var empresa = new empresaModel(req.body);
            empresa.save(function(err){
                if(err){
                   handleError('erro criando empresa',res,err);
                   return;
                }
                res.status(201).json({message:'empresa criada.'});
                }
            );
        })

        .get(function(req,res){
            empresaModel.find(function(err,empresas){
                if(err){
                   handleError('erro buscando empresas.',res,err);
                   return;
                }
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
                if(err){
                    handleError('erro atualizando empresa',res,err);
                    return;
                }
                res.status(200).json({message:'atualizado.'});
            });
        })
        .get(function(req, res) {
            empresaModel.findById(req.params.empresa_id, function(err, empresa) {
                if(err){
                    handleError('erro buscando empresa.',res,err);
                    return;
                }
                if(empresa){
                    res.status(200).json(empresa);
                }else res.status(404).json({message:'empresa não encontrada.'})
            });
        })
        .delete(function(req, res){
            empresaModel.remove({_id:req.params.empresa_id},function(err){
                if(err){  
                    handleError('erro deletando empresa',res,err)
                    return;
                }
                userModel.remove({empresa:req.params.empresa_id},function(err){
                    if(err){  
                        handleError('erro deletando usuários da empresa',res,err)
                        return;
                    }
                    res.status(200).json({message:'remoção efetuada com sucesso.'});
                });
            });
        });

router.route('/empresas/:empresa_id/users')
        .get(function(req, res) {
            userModel.find({empresa:empresa_id},function(err,users){
                if(err)
                   handleError('erro buscando usuário de empresa',res,err);
                   return;
                if(users){
                    res.status(200).json(users);
                }else{
                    res.status(404).json({message:'usuário não encontrado.'});
                }
            })
        })
        .post(
            function(req, res) {
                empresaModel.findById(empresa_id,function(err,empresa){
                    if(err){
                        handleError('erro buscando empresa',res,err);
                        return;
                    }
                    if(empresa){
                        var user = new userModel(req.body);
                        user.save(function(err){
                            if(err){
                                handleError('erro criando usuário',res,err);
                                return;
                            }
                            else res.status(201).json({message:"usuário criado."});
                        });
                    }else res.status(401).json({message:"id de empresa inválido."});
                })
            }
        );
module.exports = router;