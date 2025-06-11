const mongoose=require("mongoose");
const { ref } = require("process");

const mongoSchema=mongoose.Schema({
       user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"userDatabase"
             }, 
    title:{
            type: String,
            required:[true,"Please Enter  Title"],
    },
    amount:{
            type: Number,
            required:[true,"Please Enter  amount"],
    },
    category:{
            type: String,
            required:[true,"Please Enter  Category"],
    }, 
},
{
    timestamps:true
}
)

const expensesDatabase=mongoose.model(`expensesDatabase`,mongoSchema);
module.exports=expensesDatabase;