import Layout from '../../Componenets/Layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import {   useNavigate } from 'react-router-dom';
import '../../../src/styles/AuthStyles.css'
import { useState } from 'react';
 

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [answer,setAnswer]=useState("")
   
    const navigate = useNavigate();
    

  //  form function
    const handleSubmint = async(e)=>{
        e.preventDefault();
         try{
          const res = await axios.post('http://localhost:8080/api/vi/auth/forgot-password',{
             email,newPassword,answer
          });
          if(res && res.data.success){
            toast.success(res.data && res.data.message);
            navigate(  '/login')
          }else{
            toast.error(res.data.message)
            console.log(res.data.message)
          }
         }catch(error){
           console.log(error);
           toast.error("something went wrong")
    
         }
      }
    return (
        <Layout title={"forgot password - Ecommerce App"}>
          <div className="form-container">
           

           
           <form onSubmit={handleSubmint}>
           <h2 className='title'>Reset Password</h2>
          
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
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            className="form-control"
            required
         
            placeholder='Enter New Password' />
       
          </div>
         <div className="mb-3">
           
           <input
            type="text"
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
            className="form-control"
            required
         
            placeholder='Enter your favourite Sports ' />
       
          </div>
          
           
          
           <button type="submit" className="btn btn-primary text-center">Reset</button>
       </form>
       
        
         </div>
            
        </Layout>
    );
}

export default ForgotPassword;
