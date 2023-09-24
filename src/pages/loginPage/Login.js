import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {loginData} = useSelector((state) => state.data)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data)
    const newArr = loginData.filter(item => (
        item.name === data.name && +item.password === +data.password ?
        navigate('/home')
        :
        null
        
    ))
  }

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
            <input {...register("name")} />
            </div>
            <div className="user-password">
             <img alt="img" src="password.svg"/>
             <input type={"password"} {...register("password")} />
            </div>
           
          <button type="submit">Giriş Yap</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
