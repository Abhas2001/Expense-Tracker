import React from 'react'
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom'
import Records from './Records';

const ReacentTransaction = (props) => {




    const cdate = new Date().toLocaleDateString();
    const navigate = useNavigate()
    const[flag,setflag]= useState(false);

    const handletransaction = () =>{
           navigate('records')
    }

    props.income.map((x)=>{
        console.log(x);
    })

    let recordarr = props.income;

    
    
  return (
    <div className='w-full flex justify-center items-center'>
         <div className='w-[60%] h-[20rem] rounded-md bg-[#1e1e1e] '>
          <div className='w-full flex justify-between text-white p-3'><p>Recent transaction</p> <button onClick={handletransaction}>See all</button></div>
    


          { props.income.map((x)=>{return(
    <div className='w-full flex flex-col gap-4 justify-center items-center '>
    <div className='w-[90%] h-30 bg-[#2a2a2a] text-white flex justify-between gap-2 border-b-2 border-slate-100 shadow-custom-white max-md:w-[93%]'>
             
             
             <div> <h1 className='text-3xl'>Income</h1>
       <p className='text-green-500'>Amount {x}</p>
       </div>

       <div className='flex flex-col justify-center'>
       <p>Catagoury </p>
       <p>{cdate}</p>
       </div>
  
    </div>
    </div>
    )})
}



   
    
    
    
    
    </div>

     
    </div>
  )
}

export default ReacentTransaction
