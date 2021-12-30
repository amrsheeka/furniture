const mongoose = require('mongoose');
// const bcrypt =require('bcrypt');
const UserSchema = mongoose.Schema({
    userName : {
        type : String ,
        required : true ,
    } ,
    passWord : {
        type : String ,
        required : true,
    } ,
    confirm_passWord : {
        type : String ,
        required : false,
    } ,
    firstName :{
        type : String ,
        required : false ,
    }, 
    lastName :{
        type : String ,
        required : false ,
    }, 
    isAdmin : {
        type : Boolean ,
        required : false
    }
})

// UserSchema.methods.hashPassword = function(passWord){
//     return bcrypt.hashSync(passWord , bcrypt.genSaltSync(5),null)
// }

module.exports = mongoose.model('User' , UserSchema);
