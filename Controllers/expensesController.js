const expensesDatabase=require("../modules/expensesDatabase");

//to get all expenses
//get
const getExpenses= async (req,res)=>{
    const allexpenses= await expensesDatabase.find({user_id:req.user.id});
    if (!allexpenses) {
        res.status(404)
        throw new Error("Expenses not found Or Empty!!");
    }
    res.status(201).json(allexpenses);
}

//get
//to get single expense
const getExpense= async (req,res)=>{
    const singleExpense= await expensesDatabase.findById(req.params.id);
    if(!singleExpense){
        res.status(404)
        throw new Error("Expense not found!!");
    }
    if (singleExpense.user_id ==req.user.id) {
        res.status(201).json(singleExpense);
    }else{
        res.status(404)
        throw new Error("Not Authorized!!");
    }
}
//create Expense
//post
const createExpense= async (req,res)=>{
    const {title,amount,category}=req.body;
    if (!title || !amount || !category) {
        res.status(401)
        throw new Error("All feilds are mandatory!!");
    }
    const newExpense= await expensesDatabase.create({
         title,
         amount,
         category,
         user_id:req.user.id
    })
    if (!newExpense) {
        res.status(404)
        throw new Error("Expense not Created!!");
    }
    if (newExpense) {
        res.status(201).json(newExpense);
    }
}
//update Expense
//put
const updateExpense= async (req,res)=>{
   const update= await expensesDatabase.findByIdAndUpdate(req.params.id,req.body)
   if (!update) {
     res.status(404)
        throw new Error("Expense not Updated, Check expense Id!!");
   }
   res.status(200).json(update);
}

//deleting Expense
//Delete
const deleteExpense= async (req,res)=>{
   const deleteExp= await expensesDatabase.findByIdAndDelete(req.params.id,req.body)

   if (!deleteExp) {
     res.status(404)
        throw new Error("Expense not Deleted, or already deleted or Check expense Id!!");
   }
   res.status(200).json(deleteExp);
}

module.exports={getExpenses,getExpense,createExpense,updateExpense,deleteExpense}