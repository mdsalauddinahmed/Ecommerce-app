import React, { useState } from 'react';
import Layout from '../../Componenets/Layouts/Layout';
import { toast } from 'react-toastify';

const Register = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");

  //  form function
  const handleSubmint =(e)=>{
    e.preventDefault();
    console.log(email,name,pass,address,phone);
    toast.success("Register Succssfully");
  }
    return (
        <Layout title={"Register now -Eccomerce app"}>
            <div className="register">
            <h2>Register Now</h2>

           
    <form onSubmit={handleSubmint}>
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
     value={pass}
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
   
 
  <button type="submit" className="btn btn-primary text-center">Submit</button>
</form>

 
            </div>
        
            
        </Layout>
    );
}

export default Register;
