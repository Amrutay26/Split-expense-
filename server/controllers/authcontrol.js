const usermodel=require('../models/User');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const usermail=await usermodel.findOne({email});
    if(usermail){
      return  res.json({
        success:false,
        message:"User already exists"
      });
    }
    
    const hashedpass=await bcrypt.hash(password,10);
    const user=await usermodel.create({
        name,
        email,
        password : hashedpass
    });
    console.log(user);

      return res.json({
        success: true,
        message: "User created successfully",
        user
    });
  }
    catch(err){
       console.log(err);
      res.status(500).json(err);
    }

}
const login=async(req,res)=>{
  try{
const {email,password}= req.body;
const user=await usermodel.findOne({email});
if(!user){
   return res.status(403).json({
    success:false,
    message:"User not exist"
   })
}
const isMatch= await bcrypt.compare(password,user.password)
    
if(!isMatch){
  return res.status(401).json({
    success:false,
    message:"Wrong passord"
  })
}

const token=jwt.sign(
  { id:user._id,role:user.role},
  process.env.JWT_SECRET,
  {expiresIn :'4d'}
)

return res.json({
        success:true,
        message:"Login successful",
        token,
        user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  }
  catch(err){    
res.status(500).json(err);
  }
}

module.exports={register,login};