import React from 'react'
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';



const NavBar = () => {

  const {cart} = useSelector((state)=>state);
  return (
    <div className="flex bg-[#0f172a] w-full h-[90px]">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div>
          <NavLink to='/'>
              <img className="w-[172px]" src={Logo}></img>
          </NavLink>
        </div>
        <div className="flex gap-x-7 relative">
          <NavLink to='/'>
              <p className="text-white hover:text-[#16A34A]" >Home</p>
          </NavLink>
          <NavLink to='/cart'>
              <FaCartShopping className="text-2xl " color="white" />
              {
                cart.length>0 &&
                <span className="bg-[#16A34A] animate-bounce w-[20px] h-[20px] rounded-full  flex justify-center items-center ease-in-out text-white absolute left-[82px] transition-all duration -top-2">{cart.length}</span>
               
              }
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
