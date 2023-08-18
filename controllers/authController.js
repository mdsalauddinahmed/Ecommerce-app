import { comparePassword, hasPassword } from "../helpers/authHelpers.js";
import userModels from "../modals/userModels.js";
import JWT from "jsonwebtoken";

  export  const registerController = async (req,res) => {
    try{
    const {name,email,password,phone,address,answer}=req.body
    if(!name){
      return res.send({message:"Name is Required"})
    }
    if(!email){
      return res.send({message:"Email is Required"})
    }
    if(!password){
      return res.send({message:"Password is Required"})
    }
    if(!phone){
      return res.send({message:"Phone is Required"})
    }
    if(!address){
      return res.send({message:"Address is Required"})
    }
    if(!answer){
      return res.send({message:"Answer is Required"})
    }
    // check user
    const existingUser = await userModels.findOne({email});
    // existing user
    if(existingUser){
      return res.status(200).send({
        success:false,
        message:"Already register"
      })
    }
    const hashedPassword= await hasPassword(password)
    
    // save
    const user= await new userModels({name,email,phone,address,password:hashedPassword,answer}).save();
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
        _id: user._id,
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


// forgotPasswordController
export const forgotPasswordController=async(req,res)=>{
   try{
    const {email,answer,newPassword}=req.body;
    if(!email){
      res.status(400).send({message:"Email is required"})
    }
    if(!answer){
      res.status(400).send({message:"Answer is required"})
    }
    if(!newPassword){
      res.status(400).send({message:"NewPassword is required"})
    }
    //  ckeck
    const user = await userModels.findOne({email,answer});

    // validation

    if(!user){
      return res.status(404).send({
        success:false,
        message:"something went wrong",
      })
    }
    const hashed = await hasPassword(newPassword);

    await userModels.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
      success:true,
      message:"password reset successfully",
    });

   }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:"something went wrong",
      error
    })
   }
}



// test controller

export const testController = (req,res)=>{
 try{
  res.send("protected Routes")
 }catch(error){
  console.log(error);
  res.send({error})
 }
}