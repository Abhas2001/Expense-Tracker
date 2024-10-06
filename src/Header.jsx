import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
     
 const navigate = useNavigate();
  const[valss,setvalss]=useState(0);

  const handleHome = () => {
          navigate('/');
          setvalss(0);
  }

  const handlebudget = () => {
    navigate('/budget');
    setvalss(1);
}


  return (
    <div className='min-h-32'>
    <div className='w-full min-h-20 bg-[#1e1e1e] shadow-custom-white'>
      <h1 className="text-2xl font-bold  text-white">
       Personal Expense
    </h1>
    <div className='flex justify-center items-center gap-20'>
      <button className={`text-white text-xl font-bold cursor-pointer ${valss==0?'border-b-2':null}`} onClick={handleHome}>Home</button>
      <button className={`text-white text-xl font-bold cursor-pointer ${valss==1?'border-b-2':null} `} onClick={handlebudget}>Budgets</button>
    </div>
    </div>
    </div>
  )
}

export default Header
