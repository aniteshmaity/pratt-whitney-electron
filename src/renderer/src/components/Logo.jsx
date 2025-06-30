import React from 'react'
import homeLogo from "../assets/images/home_logo.svg";
import LogoWhite from "../assets/100years/logo-white.png";
import { Link, useNavigate } from 'react-router-dom';
const Logo = ({type}) => {
    const navigate = useNavigate();
    const homeClick = ()=> {
        navigate("/home");
        sessionStorage.removeItem("currentAirplaneIndex");
    }
  return (
   
   <div className='cursor-pointer' onClick={homeClick}>
     {type === "white" ? <img  src={LogoWhite} alt="homeWhiteLogo" /> : <img  src={homeLogo} alt="homeLogo" /> }
   </div>
   
  )
}

export default Logo