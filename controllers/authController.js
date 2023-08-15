import { comparePassword, hasPassword } from "../helpers/authHelpers.js";
import userModels from "../modals/userModels.js";
import JWT from "jsonwebtoken";

  export  const registerController = async (req,res) => {
    try{
    const {name,email,password,phone,address}=req.body
    if(!name){
      return res.send({error:"Name is Required"})
    }
    if(!email){
      return res.send({error:"Email is Required"})
    }
    if(!password){
      return res.send({error:"Password is Required"})
    }
    if(!phone){
      return res.send({error:"Phone is Required"})
    }
    if(!address){
      return res.send({error:"Address is Required"})
    }
    // check user
    const existingUser = await userModels.findOne({email});
    // existing user
    if(existingUser){
      return res.status(200).send({
        success:true,
        message:"Already register"
      })
    }
    const hashedPassword= await hasPassword(password)
    
    // save
    const user= await new userModels({name,email,phone,address,password:hashedPassword}).save();
    res.status(201).send({
      success:true,
      message:"User Register successfully",
      user,
    })

    }catch(error){
      console.log(error)
      res.status(500).send({
        success:false,
        message:"Error in Registration",
        error
      })
    }
  };

// export default {authController}; 


// Post Login
export const  loginController =async(req,res)=>{
  try{
    const {email,password} = req.body;

    // validation

    if( !email || !password){
      return res.status(404).send({
        success:false,
        message:'Invalid email or password'
      })
    }
    const user = await userModels.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:'Email is not registered'
      })
    }
    const match = await comparePassword(password,user.password);
    if(!match){
      return res.status(200).send({
        success:false,
        message:'Invalid password'
      });
    }
    
  

    // Token
    const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
      expiresIn: "7d",
    });
    res.status(200).send({
      success:true,
      message:"login successfully",
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
      },
      token,
    })

  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error in login',
      error
    })
  }
}

// test controller

export const testController = (req,res)=>{
  res.send("protected Routes")
}