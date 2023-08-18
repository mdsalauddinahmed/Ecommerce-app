import React, { useState } from 'react';
import Layout from '../../Componenets/Layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../src/styles/AuthStyles.css'

const Register = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [answer,setAnswer]=useState("");
    const navigate = useNavigate();

  //  form function
  const handleSubmint = async(e)=>{
    e.preventDefault();
     try{
      const res = await axios.post('http://localhost:8080/api/vi/auth/register',{
        name,email,password,phone,address,answer
      });
      if(res && res.data.success){
        toast.success(res.data && res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }
     }catch(error){
       console.log(error);
       toast.error("something went wrong")

     }
  }
  // console.log(process.env.React_App_api)
    return (
        <Layout title={"Register now -Eccomerce app"}>
            <div className="form-container">
           

           
    <form onSubmit={handleSubmint}>
    <h2 className='title'>Register Now</h2>
  <div className="mb-3">
    
    <input
     type="text"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="form-control"
     
     required
     placeholder='Enter Your name' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     className="form-control"
     required  
     placeholder='Enter Your Email' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     className="form-control"
     required
  
     placeholder='Enter Password' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     value={phone}
     onChange={(e)=>setPhone(e.target.value)}
     className="form-control"
     required
     
     placeholder='Enter Your Phone' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     value={address}
     onChange={(e)=>setAddress(e.target.value)}
     className="form-control"
     required
     placeholder='Enter your address' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     value={answer}
     onChange={(e)=>setAnswer(e.target.value)}
     className="form-control"
     required
     placeholder='Enter your  favorite sports' />

     
  </div>
   
 
  <button type="submit" className="btn btn-primary text-center">Submit</button>
</form>

 
            </div>
        
            
        </Layout>
    );
}

export default Register;
