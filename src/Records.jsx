import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Records = (props) => {
    const cdate = new Date().toLocaleDateString();
    const[arr,setarr] = useState([]);
    const[final,setfinal] = useState([]);
    useEffect(()=>{
      setarr([...props.income])
    },[props.income])

    console.log(arr);



   

  return (
    <div>
      <div className='w-full'>
{ props.income.map((x)=>{return(
    <div className='w-full flex flex-col justify-center items-center '>
    <div className='w-[50%] h-40 bg-[#2a2a2a] text-white flex flex-col gap-2 border-b-2 border-slate-100 shadow-custom-white max-md:w-[93%]'>
              <h1 className='text-3xl'>Income</h1>
       <p className='text-green-500'>Amount {x}</p>
       <p>Catagoury </p>
       <p>{cdate}</p>
  
    </div>
    </div>
    )})
}



{ props.xpensive.map((x)=>{return(
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[50%] h-40 bg-[#2a2a2a] text-white flex flex-col gap-2 border-b-2 shadow-custom-white border-slate-100 max-md:w-[93%]'>
              
              <h1 className='text-3xl'>Expense</h1>
       <p className='text-red-500'>Amount -{x}</p>
       <p>Catagoury </p>
       <p>{cdate}</p>
  
    </div>
    </div>
    )})
}
</div>
    </div>
  )
}

export default Records
