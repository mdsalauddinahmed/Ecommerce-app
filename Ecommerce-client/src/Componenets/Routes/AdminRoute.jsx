import { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinners/Spinner";

 

export  const  AdminRoute =()=>{
  const [ok,setOk]=useState(false);
  const [auth,setAuth]=useAuth();
  useEffect(()=>{
 
  const authCheck = async()=>{
    const res= await axios.get('http://localhost:8080/api/vi/auth/admin-auth');
    // ,{
    //     headers:{
    //         "Authorization":auth?.token
    //     }
    // })
    if(res.data.ok){
        setOk(true)
    }else{
        setOk(false);
    }
  }

  if(auth?.token) {authCheck()}

  },[auth?.token]);

  return ok? <Outlet></Outlet>:<Spinner path=""></Spinner>;
}