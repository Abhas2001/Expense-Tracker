import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Budget = () => {
     

  const[flag,setflag] = useState(false);
  const[rinks,setrinks] = useState(false);

  const[input,setinput] = useState("");
    const navigate = useNavigate();


    let mis=localStorage.getItem('minus');

    console.log(mis);
    let x=0;
     x=(mis*100)/input;

     const handlebudget=()=>{
           setflag(true);
     }

      const handleinput = (e) =>{
        setinput(e.target.value)
      }
      

      const handleadd = () =>{
        if(input.length>0){
         setrinks(true);
        }
      }

      const handleedit = () =>{
        setrinks(false);
      }
      console.log(input);
  return (
    <>
      <div className='w-full flex flex-col gap-10 justify-center items-center'>
      

      <div className='w-[50%] h-40 bg-[#2a2a2a]'>
      <button className='text-white' onClick={()=>{navigate(-1)}}>back</button>
      <button className='text-white' onClick={handlebudget}>create budget</button>
      <div>
        <input className='bg-slate-400' type="text" onInput={handleinput} />
        <button className='text-white'  onClick={handleadd}>add</button>
        <button  className='text-white' onClick={handleedit}>edit</button>

        {
          rinks == true?
          <div className='text-white'>{input}</div>
          :
          <div></div>
        }
      </div>
      <div className='w-[250px] h-[10px] border-2 border-white rounded-full'><div style={{ width: `${(x*250)/100}px` }} className={`h-[8px]  bg-green-500`}></div></div>
      </div>
        

          <div className='w-[50%] h-40 bg-[#2a2a2a] p-4'>
            <div className='w-[60%] flex gap-5 justify-center items-center'>
              <div className='w-[80px] h-[50px]'>
              <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/33/2023/01/goals.png" alt="" srcset="" />
              </div>
              <div>
               <h1 className='text-white font-bold text-2xl'>Goals</h1>
               <p className='text-gray-400 font-serif text-lg'>Set your own goal and a have a quick  <br />overview of your progress</p>
               </div>
               </div>
               <button className='text-blue-500 font-bold text-xl'>Create Goal</button>
          </div>
          </div>
    </>
  )
}

export default Budget
