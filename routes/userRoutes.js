const express=require("express")
const userRouter=express.Router();
const {register,login}=require("../Controllers/userControllers")

userRouter.post("/register",register);
userRouter.post("/login",login);


module.exports=userRouter;