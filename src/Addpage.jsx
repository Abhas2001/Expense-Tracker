import React from 'react'
import { useState } from 'react';

const Addpage = (props) => {
 
  const[incomevalue,setincomevalue]=useState()
  const[flag , setflag] = useState(false);
  const[ghg , setghg] = useState(false);
  const[bool,setbool] = useState(false);
  const[abdd,setabdd] = useState(0);

    const handleback = () =>{
          props.setval(0);
          abdd==0?
          props.setincome([...props.income,incomevalue])
          :
          props.setxpensive([...props.xpensive,incomevalue])
    }

    const handleexpense = () =>{
      setflag(true)
      setghg(false)
      setbool(true)
      setabdd(1);
  }
  const handleincome = () =>{
  setghg(true);
  setflag(false)
  setbool(false)
  setabdd(0);
  }

  console.log(bool);
    const handleamount = (e) => {
             setincomevalue(e.target.value);
    }
    
  return (
    <div className='w-full h-full flex flex-col gap-20 justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[50%] h-40 bg-white flex flex-col gap-2 max-md:w-[100%]'>
              <div className='flex '><button className={flag==true?'bg-gray-400 text-white border-2 border-gray-400  p-2':'text-gray-400 border-2 border-gray-400  p-2'} onClick={handleexpense}>expense</button> 
              <button className={ghg==false?'bg-white text-gray-400 border-2 border-gray-400 p-2':'bg-gray-400 text-white border-2 border-gray-400 p-2'} onClick={handleincome}>Income</button></div>
       <p>Amount <input type="text" className='border-2 border-slate-400' onInput={handleamount} /></p>
       <p>Catagoury <input type="text" className='border-2 border-slate-400'/></p>
  <div className='w-full flex justify-center items-center '>
       <button className='bg-[#4169e1] text-white shadow-lg w-10 h-10 rounded-full' onClick={handleback}>+</button>
       </div>
    </div>
    </div>


 
 

    </div>
  )
}

export default Addpage
