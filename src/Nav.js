import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import "./Nav.css"

function Nav() {

  const[show, handleShow] = useState(false);
  const navigate = useNavigate();
  
  
  const transitionNavBar = () =>{
      if(window.scrollY >100)
      {
          handleShow(true);
      }
      else
      {
          handleShow(false);
      }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return()=>window.removeEventListener("scroll",transitionNavBar)
  },[])

  return (
  <div className={`nav ${show && 'nav__black'}`}>
    <div className='nav__contents'>
    <img 
    onClick={()=> navigate("/")}
    className='nav__logo'
    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
    alt=""/>

    <img
    onClick={()=>auth.signOut()}
    className='nav__avatar'
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
    alt=""/>
    </div>
  </div>);
}
// https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png 

export default Nav;
