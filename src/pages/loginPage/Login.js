import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
    const {loginData} = useSelector((state) => state.data)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data)
    loginData.every(item => (
        item.name === data.name && +item.password === +data.password ?
        navigate('/home')
        :
        Swal.fire(
            'Kullanıcı Adı veya Şifre Yanlış...'
          )
        
    ))
  }

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-title">
          <img alt="img" src="logo.png" />
          <h2>AdminD'ye Giriş Yap</h2>
        </div>
        <div className="login-auth">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-login">
            <img alt="img" src="user.svg"/>
            <input required {...register("name")} />
            </div>
            <div className="user-password">
             <img alt="img" src="password.svg"/>
             <input required type={"password"} {...register("password")} />
            </div>
           
          <button type="submit">Giriş Yap</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
