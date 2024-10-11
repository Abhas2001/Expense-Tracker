import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Home from './Home';
import Addpage from './Addpage';
import Records from './Records';
import { useEffect } from 'react';
import { Goalcontext } from './Goal';

const Header = (props) => {

 
     
 const navigate = useNavigate();
  const[valss,setvalss]=useState(0);
  const[openadd,setopenadd]=useState(0);
  const[income,setincome]=useState([])
  const[xpensive,setxpensive]=useState([])
  const[ayush,setayush]=useState([]);
   let sum = 0;
   let negatives = 0;
 for(let i=0;i<income.length;i++){
      sum+=JSON.parse(income[i]);
 }

 for(let j=0;j<xpensive.length;j++){
   negatives+=JSON.parse(xpensive[j]);
 }

 if(sum!==0){
 localStorage.setItem("item",sum);
 }
useEffect(()=>{
localStorage.setItem('final',(sum+ JSON.parse(localStorage.getItem('item'))));
},[sum])

  const handleHome = () => {
          navigate('/');
          setvalss(0);
          setopenadd(0);
  }

  const handlebudget = () => {
    navigate('/budget');
    
}
const {val}=useContext(Goalcontext)


  return (

    <>
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
    {openadd==0?
  <Home setopenadd={setopenadd}  negatives={negatives} xpensive={xpensive} sum={sum} setval={props.setval} income={income}/>
    : openadd==1?
    <Addpage income={income} xpensive={xpensive} setopenadd={setopenadd} negatives={props.negatives} setxpensive={setxpensive} sum={sum} setval={props.setval} setincome={setincome}/>
  :
  <Records income={income} xpensive={xpensive}/>  
  
  }
  </>
  )
}

export default Header
