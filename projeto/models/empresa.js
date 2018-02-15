var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmpresaSchema = new Schema({
    cnpj:{
        type: String,
        unique: true,
        required: true
    },nome:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
},
{ timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'} });



module.exports = mongoose.model('Empresa', EmpresaSchema);