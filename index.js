const express=require("express");
require("dotenv").config();
const mongoose=require("mongoose");
const app= express();
app.use(express.json());

const port=process.env.PORT || 4001

const mongodb= mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected to database!!")}).catch(err=>{
    console.log("Failed to connect to database!!")
})

app.use("/api/expenses/",require("./routes/expensesRoutes"));
app.use("/api/auth/",require("./routes/userRoutes"));


app.listen(port,()=>{
     console.log(`Running on port: ${port}`);
})
