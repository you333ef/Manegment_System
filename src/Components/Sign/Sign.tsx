import React from 'react';
// import '../Sign/Edit_sign.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignFormData {
  username: string;
  password: string;
}

const Sign: React.FC = () => {
  let navi = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignFormData>();
  
  const submit_Fun: SubmitHandler<SignFormData> = async (data) => {
    try {
      let response = await axios.post('https://dummyjson.com/auth/login', data);
     
      navi('/dashboard/home');
      window.location.reload();
      toast("Wow so easy!");
      localStorage.setItem("data_Login_User", response.data.accessToken);
      console.log(response, data);
    } catch (error) {
      console.log('Error Ya Zahpee');
    }
  };

  return (
    <div className="sign-container">
      <ToastContainer />
      <div className="sign-form-wrapper">
        <h4 className="sign-title"><span>|</span>User Management System</h4>
        <div className="sign-header">
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submit_Fun)} className="sign-form">
          <label>Email</label>
          <input 
            placeholder="Enter your email" 
            {...register("username", { required: 'UserName is required' })}
          />
          {errors?.username && <span>{errors.username.message}</span>}
          <label>Password</label>
          <input 
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: 'Your passeord is erquied' })}
          />
          {errors?.password && <span>{errors.password.message}</span>}
          <button type="submit" className="sign-submit text-center justify-content-center m-auto d-block">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;