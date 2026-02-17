import React from 'react'
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themeSlice.js';
import { Link } from 'react-router';



function Header() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const dispatch = useDispatch();
  const toggleTheme = ()=>{
    dispatch(changeTheme());
  }

  const navLinks = [
    {
      field : "About",
      link : "/about",
    },
    {
      field : "Projects",
      link : "/projects",
    },
    {
      field : "Contact",
      link : "/contact",
    },
  ]



  return (
    <div className={`h-32  w-full flex items-center justify-between  ${darkTheme ? 'text-white bg-gray-900' : 'bg-slate-50 text-black'} transition-colors duration-500  `}>
      <h1 className='text-3xl px-2 font-bold text-blue-500 '>
        <Link to="/">Aniket</Link>
      </h1>
      <div className='md:pr-12 pr-6  flex gap-5 items-center'>
        <div className='flex gap-4 visible md:invisible '>
          {navLinks.map((link) => (
            <Link key={link.field} to={link.link} className="hover:text-blue-500 font-semibold transition-colors duration-300">
              {link.field}
            </Link>
          ))}
        </div>
        {darkTheme ? <FaMoon onClick={toggleTheme} className='text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer ' />:
         <FiSun onClick={toggleTheme} className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer ' />}
      </div>
    </div>
  )
}

export default Header
