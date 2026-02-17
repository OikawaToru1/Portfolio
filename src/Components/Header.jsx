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

  console.log(darkTheme);


  return (
    <div className={`h-32  w-full flex items-center justify-between  ${darkTheme ? 'text-white bg-gray-900' : 'bg-slate-50 text-black'} transition-colors duration-500  `}>
      <h1 className='text-3xl px-2 font-bold text-blue-500 '>
        <Link to="/">Aniket</Link>
      </h1>
      <div className='pr-12'>
        {darkTheme ? <FaMoon onClick={toggleTheme} className='text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer ' />:
         <FiSun onClick={toggleTheme} className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer ' />}
      </div>
    </div>
  )
}

export default Header
