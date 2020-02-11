const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        max: 100
    },
    email: {
        type: String, 
        required: true
    },
    vote:{
        type:String
    },
    session:{
        type:Number,
        default:0
    }
});


module.exports = mongoose.model('user', userSchema);