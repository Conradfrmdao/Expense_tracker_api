const mongoose=require("mongoose");

const mongoSchema=mongoose.Schema({
    username:{
            type: String,
            required:[true,"Please Enter username"],
    },
    email:{
            type: String,
            required:[true,"Please Enter email"],
    },
    password:{
            type: String,
            required:[true,"Please Enter password"],
    }, 
},
)

const userDatabase=mongoose.model(`userDatabase`,mongoSchema);
module.exports=userDatabase;