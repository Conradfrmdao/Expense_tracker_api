const jwt=require("jsonwebtoken");
require("dotenv").config();

const validationToken=  async (req,res,next)=>{
    let token;
    let authHeader= req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token=authHeader.split(" ")[1];

        jwt.verify(token,process.env.PRIVATE_ACCESS_KEY,(err,decoded)=>{
            if (err) {
                res.status(401)
                throw new Error("User not Verified!!");
            }
            req.user=decoded.user;
            console.log("Authenticated User:", req.user);

            next();
        })
    }if(!token){
       res.status(401)
        throw new Error("Token expired or invalid!!")
    }

}

module.exports=validationToken;