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
     x=(mis*100)/5000;

     const handlebudget=()=>{
           setflag(true);
     }

      const handleinput = (e) =>{
        setinput(e.target.value)
      }
      

      const handleadd = () =>{
         setrinks(true);
      }

      const handleedit = () =>{
        setinput("");
      }
      console.log(input);
  return (
    <>
      
      

      <div className='w-full h-20 bg-slate-400'>
      <button className='bg-white' onClick={()=>{navigate(-1)}}>back</button>
      <button onClick={handlebudget}>create budget</button>
      <div>
        <input type="text" onInput={handleinput} />
        <button  onClick={handleadd}>add</button>
        <button onClick={handleedit}>edit</button>

        {
          rinks == true?
          <div>{input}</div>
          :
          <div></div>
        }
      </div>
      <div className='w-[250px] h-[30px] border-2 border-white'><div style={{ width: `${(x*250)/100}px` }} className={`h-[28px]  bg-red-500`}></div></div>
      </div>

    </>
  )
}

export default Budget
