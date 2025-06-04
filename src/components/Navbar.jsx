import React from 'react'
import { NavLink } from 'react-router'
import Spice from "../assets/Spice.png"

const Navbar = () => {
  return (
    <div className='text-2xl font-semibold bg-[#1DCD9F] flex justify-center gap-5 p-4' style={{fontFamily:"Josefin Sans"}}>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/receipe"}>Receipe</NavLink>
       <NavLink to={"/about"}>About</NavLink>
       <NavLink to={"/create"}>Create</NavLink>
       <NavLink to={"/favorite"}>Favorite</NavLink>
    </div>
  )
}

export default Navbar