import React from 'react';
import Stylee from '../Sign/sign.module.css';

const Sign = () => {
  return (
    <div className={Stylee.login_Wazeer}>
      <div className={Stylee.bodyForm}>
        <h4 className={Stylee.title}><span>|</span>User Management System</h4>
        <div className={Stylee.enterSection}>
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form className={Stylee.formContainer}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        
        </form>
        <button type="submit" className={Stylee.supmit} >SIGN IN</button>
      </div>
    </div>
  );
};

export default Sign;
