 import Layout from '../../Componenets/Layouts/Layout';
 import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../src/styles/AuthStyles.css'
import { useState } from 'react';
import { useAuth } from '../../Context/Auth';

const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useAuth()
    const navigate = useNavigate();

  //  form function
  const handleSubmint = async(e)=>{
    e.preventDefault();
     try{
      const res = await axios.post('http://localhost:8080/api/vi/auth/login',{
         email,password 
      });
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        });
        localStorage.setItem("auth",JSON.stringify(res.data));
        navigate('/')
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
        <Layout title={"Sign In-ecommerce app"}>
 <div className="form-container">
           

           
           <form onSubmit={handleSubmint}>
           <h2 className='title'>Login</h2>
          
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
          
           <button type="submit" className="btn btn-primary text-center">Sign In</button>
       </form>
       
        
         </div>
            
        </Layout>
    );
}

export default Login;
