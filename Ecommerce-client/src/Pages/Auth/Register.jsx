import React from 'react';
import Layout from '../../Componenets/Layouts/Layout';

const Register = () => {
    return (
        <Layout title={"Register now -Eccomerce app"}>
            <div className="register">
            <h2>Register Now</h2>

           
    <form>
  <div className="mb-3">
    
    <input
     type="text"
     className="form-control"
     id="exampleInputEmail1"  
     placeholder='Enter Your name' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     className="form-control"
     id="exampleInputEmail1"  
     placeholder='Enter Your name' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     className="form-control"
     id="exampleInputEmail1"  
     placeholder='Enter Your name' />

     
  </div>
  <div className="mb-3">
    
    <input
     type="text"
     className="form-control"
     id="exampleInputEmail1"  
     placeholder='Enter Your name' />

     
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary text-center">Submit</button>
</form>

 
            </div>
        
            
        </Layout>
    );
}

export default Register;
