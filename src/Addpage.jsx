import React from 'react'
import { useState } from 'react';
import Header from './Header';

const Addpage = (props) => {
 
  const[incomevalue,setincomevalue]=useState()
  const[flag , setflag] = useState(false);
  const[ghg , setghg] = useState(false);
  const[bool,setbool] = useState(false);
  const[abdd,setabdd] = useState(0);

    const handleback = () =>{
          props.setopenadd(0);
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
    
    console.log(props.xpensive);
  return (
    <>
     <div className='w-full h-full flex flex-col gap-20 justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center  max-md:w-[95%]'>
    <div className='w-[50%] h-40 bg-[#2a2a2a] flex flex-col gap-2 shadow-custom-white max-md:w-[100%]'>
              <div className='flex '><button className={flag==true?'bg-gray-400 text-white border-2 border-gray-400  p-2':'text-gray-400 border-2 border-gray-400  p-2'} onClick={handleexpense}>expense</button> 
              <button className={ghg==false?'bg-[#2a2a2a] text-gray-400 border-2 border-gray-400 p-2':'bg-gray-400 text-white border-2 border-gray-400 p-2'} onClick={handleincome}>Income</button></div>
       <p className='text-white'>Amount <input type="text" className='bg-[#2a2a2a] border-2 border-slate-400' onInput={handleamount} /></p>
       <p className='text-white'>Catagoury <input type="text" className=' bg-[#2a2a2a] border-2 border-slate-400'/></p>
  <div className='w-full flex justify-center items-center '>
       
       </div>
    </div>
    </div>


 
 
    <div className='w-full flex justify-center items-center'>  <button className='fixed bottom-2 right-18 flex justify-center items-center w-12 h-12 rounded-full bg-white text-black hover:-translate-y-1 hover:scale-110  duration-300'   onClick={handleback} ><img width="35" height="50" src="https://img.icons8.com/ios-filled/50/save--v1.png" alt="save--v1"/></button> </div>
    </div>
      
    </>
  )
}

export default Addpage
