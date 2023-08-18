import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path='login'}) => {
    const navigate =useNavigate();
    const location =useLocation();
    const [count,setCount]=useState(3);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevalue)=>--prevalue);
        },1000);
        count === 0 && navigate(`/${path}`,{
            state:location.pathname,
        });
        return ()=>clearInterval(interval)
    },[count,navigate,location,path])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"70vh"}}>
            <h4>Redirecting to you in {count} second</h4>
        <div class="spinner-grow" role="status">
         <span class="visually-hidden">Loading...</span>
          </div>
        </div>
 
    );
}

export default Spinner;
