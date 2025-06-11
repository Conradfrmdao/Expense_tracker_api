const userDatabase= require("../modules/userDatabase");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();


//register
const register= async (req,res)=>{
    const {username,email,password}=req.body;
    if (!username || !email || !password) {
        res.status(401)
        throw new Error("All feilds are mandatory!! ");
    }
//checks if user email exists
    const userExists= await userDatabase.findOne({email})
    if (userExists) {
        res.status(401)
        throw new Error("User already Exists!! ");
    }
// hash the password
    const hashedPassword= await bcrypt.hash(password,10)
//save hashed password to database not the real password
    const user= await userDatabase.create({
        username,
        email,
        password:hashedPassword
    })

    if (user) {
        res.status(200).json({message:`user created email: ${user.email},username: ${user.username},id: ${user.id}`})
    }else{
        res.status(401)
        throw new Error("User already created!!")
    }

}


//login
const login= async (req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        res.status(401)
        throw new Error("All feilds are mandatory!! ");
    }

    const user= await userDatabase.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken= jwt.sign({
            user:{
                id:user.id,
                username:user.username,
                email:user.email
            }
        },
        process.env.PRIVATE_ACCESS_KEY,
        {
            expiresIn :"15m"
        })

        res.status(200).json(accessToken);

    }else{
        res.status(401)
        throw new Error("invalid Password or Email")
    }

}


module.exports={register,login}