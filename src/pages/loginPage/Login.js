import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-title">
          <img alt="img" src="logo.png" />
          <h2>Welcome AdminD</h2>
        </div>
        <div className="login-auth">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-login">
            <img alt="img" src="user.svg"/>
            <input {...register("userName")} />
            </div>
            <div className="user-password">
             <img alt="img" src="password.svg"/>
             <input type={"password"} {...register("userPassword")} />
            </div>
           
          <button type="submit">Giriş Yap</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
