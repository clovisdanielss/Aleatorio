var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LicenseSchema = new Schema({
    nomeSistema:{
        type: String,
        unique: true,
        required: true
    },version:{
        type: String,
        required: true
    },
    tipo:{type: String, required: true},
    activationKey:{
        type: String,
        unique: true,
        required: true
    }
},
{ timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at'} });



module.exports = mongoose.model('License', LicenseSchema);