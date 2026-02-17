import React from 'react'
import { FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function Footer() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`h-12 ${darkTheme ? 'bg-gray-900 text-slate-50' : 'bg-slate-50 text-black'} flex justify-center fixed bottom-0 w-full transition-colors duration-500  `}>
      <div className={`w-1/3 px-5 mt flex justify-between items-center ${darkTheme ? 'border-gray-700' : 'border-gray-200'} border-t  `}>
        <h1><Link to="/">Aniket</Link> </h1>
        <Link to="https://github.com/OikawaToru1"><FaGithub className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer ' /></Link>
      </div>
    </div>
  )
}

export default Footer
