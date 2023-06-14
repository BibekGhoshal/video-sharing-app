const jwt=require("jsonwebtoken");
const User=require("../models/UserSchema");


const jwtAuth=async (req,res,next)=>{
    // console.log(req.headers.authorization)
    try{
        const token=req.headers.authorization
        // console.log(token);
        const verifyUser=jwt.verify(token,process.env.SECRET_KEY);
        if(!verifyUser){
            res.send("Not authorized")
        }
        const user=await User.findOne({_id:verifyUser._id});
        req.token=token;
        req.user=user;
        next();
    }catch(error){
       res.status(401).send(error)
    }
}
module.exports= jwtAuth;