import React from 'react'
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom'
import Records from './Records';

const ReacentTransaction = (props) => {




    const cdate = new Date().toLocaleDateString();
    const navigate = useNavigate()
    const[flag,setflag]= useState(false);

    const handletransaction = () =>{
          props.setopenrec(true);
    }

    props.income.map((x)=>{
        console.log(x);
    })

    let recordarr = props.income;
    localStorage.setItem('recordarr',recordarr)
   console.log(recordarr);
   const allTransactions = [...props.income.map(item => ({ type: 'income', amount: item })), 
                        ...props.xpensive.map(item => ({ type: 'expense', amount: item }))].slice(0,4)

                        
  return (
    <div className='w-full flex justify-center items-center'>
      
         <div className='w-[60%] h-[20rem] rounded-md bg-[#1e1e1e] '>
          <div className='w-full flex justify-between text-white p-3 text-lg font-semibold'><p>Recent transactions</p> <button onClick={handletransaction}>See all</button></div>
    


          { allTransactions.map((x)=>{return(
    <div className='w-full flex flex-col gap-4 justify-center items-center '>
   
    <div className={`w-[90%] h-30 ${x.type=='income'? 'bg-green-500':'bg-red-500'} text-white flex justify-between gap-2 border-b-2 border-slate-100 shadow-custom-white max-md:w-[93%] rounded-md`}>
             
            
             <div> <h1 className='text-3xl'>{x.type=='income'?'Income':'Expense'}</h1>
       <p >Amount {x.amount}</p>
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
