import React from 'react'
import './header.scss'
import { AiOutlineKey,AiFillAppstore,AiOutlineExpand } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img alt='Logo'  src='/logo.png'/>
            <span>AdminD</span>
        </div>
        <div className='header-icon'>
            <span><AiOutlineKey/></span>
            <span><AiFillAppstore/></span>
            <span><AiOutlineExpand/></span>
           <div className='search'>
            <span><BsBell/></span>
            <span>1</span>
           </div>
            <div className='user'>
            <img alt='img' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'/>
                <span>Ali</span>
                
            </div>
            <span><FaRegSun/></span>
        </div>
    </div>
  )
}

export default Header
