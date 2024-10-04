import React from 'react'
import { useState } from 'react';

const Addpage = (props) => {
 
  const[incomevalue,setincomevalue]=useState()
  const[flag , setflag] = useState(false);
  const[ghg , setghg] = useState(false);


  const handleexpense = () =>{
    setflag(true)
    setghg(false)
}
const handleincome = () =>{
setghg(true);
setflag(false)
}
console.log(ghg);
const handleamount = (e) => {
       setincomevalue(e.target.value);
}
    const handleback = () =>{
          props.setval(0);
          props.setincome([...props.income,incomevalue])
         
    }

    
 

  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[50%] h-40 bg-white flex flex-col gap-2 '>
              <div className='flex '><button className={flag==true?'bg-gray-400 text-white border-2 border-gray-400  p-2':'text-gray-400 border-2 border-gray-400  p-2'} onClick={handleexpense}>expense</button> 
              <button className={ghg==false?'bg-white text-gray-400 border-2 border-gray-400 p-2':'bg-gray-400 text-white border-2 border-gray-400 p-2'} onClick={handleincome}>Income</button></div>
       <p>Amount <input type="text" className='border-2 border-slate-400' onInput={handleamount} /></p>
       <p>Catagoury <input type="text" className='border-2 border-slate-400'/></p>
  <div className='w-full flex justify-center items-center'>
       <button className='w-12 bg-slate-600 rounded-3xl' onClick={handleback}>Add</button>
       </div>
    </div>
    </div>



  { props.income.map((x)=>{
    return(
      <div className='w-full flex justify-center items-center'>
      <div className='w-[50%] h-40 bg-white flex flex-col gap-2 '>
               
  
         <p>Amount: {x} </p>
         <p>Catagoury </p>
    <div className='w-full flex justify-center items-center'>
         
         </div>
      </div>
      </div>
    )
  })
   
}
    </div>
  )
}

export default Addpage
