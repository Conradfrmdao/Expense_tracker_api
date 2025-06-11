const express=require("express")
const router=express.Router();
const {getExpenses,getExpense,createExpense,updateExpense,deleteExpense}=require("../Controllers/expensesController")
const validationToken=require("../middleware/validationToken");

router.use(validationToken);
router.route("/").get(getExpenses);
router.route("/:id").get(getExpense);
router.route("/").post(createExpense);
router.route("/:id").put(updateExpense);
router.route("/:id").delete(deleteExpense);


module.exports=router;