var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmpresaSchema = new Schema({
    cnpj:{
        type: String,
        unique: true,
        required: true
    },email:{
        type: String,
        index: true,
        unique: true,
        required : true
    }
    ,nome:{
        type: String,
        required: true
    },
    address:{
        rua:{type: String, required: true},
        cep:{type: String , required: true},
        bairro:{type: String , required: true},
        complemento:{type:String}
    }
},
{ timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'} });



module.exports = mongoose.model('Empresa', EmpresaSchema);