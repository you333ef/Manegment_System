import React from 'react';
import Stylee from '../Sign/sign.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Sign = () => {
  let navi=useNavigate()
 
let {register,handleSubmit,formState:{errors}}=useForm()
 let submit_Fun=async (data:any)=>{
   try {
    let response=await axios.post('https://dummyjson.com/auth/login',data)
    navi('/dashboard')
    toast("Wow so easy!")
    console.log(response,data)
   } catch (error) {
    console.log('Error Ya Zahpee')
    
   }
 }
  return (
    <div className={Stylee.login_Wazeer}>
       <ToastContainer />
      <div className={Stylee.bodyForm}>
        <h4 className={Stylee.title}><span>|</span>User Management System</h4>
        <div className={Stylee.enterSection}>
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submit_Fun)} className={Stylee.formContainer}>
          <label>Email</label>
          <input 
           placeholder="Enter your email" 
           {...register("username",{required:'UserName is required'})}
           />
           {errors?.username &&<span>{errors.username.message}</span> }
          <label>Password</label>
          <input type="password"
          placeholder="Enter your password"
          {...register("password",{required:'Your passeord is erquied'})}
          />
          {errors?.password && <span>{errors.password.message}</span> }
         <button type="submit" className={`text-center  justify-content-center m-auto d-block  ${Stylee.supmit}`} >SIGN IN</button>
        </form>
      </div>
    </div>
  );
};
export default Sign;
