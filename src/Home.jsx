import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Goalcontext } from './Goal';
import ReacentTransaction from './ReacentTransaction';
import Records from './Records';

const Home = (props) => {

  const[openrec,setopenrec]=useState(false);
  

  let abd=(props.sum-props.negatives)
  if(abd!==0){
  localStorage.setItem("text",abd )
  }

  if(props.sum!==0){
  localStorage.setItem("add",props.sum )
  }

  if(props.negatives!==0){
  localStorage.setItem("minus",props.negatives)
  }
 
  const navigate = useNavigate();
  const[val,setval]=useState(0);
  const[xbtn,setxbtn]=useState(0);

    const handleaddpg =()=>{
        props.setopenadd(1);
    }
    const handleexpenseclick = () =>{
              setval(1);
              setxbtn(0);
    }
    const handleIncomeclick=()=>{
             setxbtn(1);
             setval(0);
    }

    const handleRecords = () => {
      props.setopenadd(2);
    }

    let value = localStorage.getItem('text');
    let add = localStorage.getItem('add');
    let  minus=localStorage.getItem('minus');
   
  
    

  return (
    openrec==true?
    <Records income={props.income} xpensive={props.xpensive} setopenrec={setopenrec}/>
    :
    <div className= 'w-full h-full flex flex-col justify-between gap-24'>
      
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[60%] h-[10rem] rounded-md bg-[#1e1e1e] flex justify-center items-center gap-10 shadow-custom-white max-md:w-[93%]'>
      <button className='bg-[#4169e1] border-[#4169e1] border-2 text-white h-13 rounded-md p-1'>
       <p className='text-xs font-bold'>Current Balance</p>
       <p className='text-xs font-bold'>{"₹"+(props.sum-props.negatives)}</p>
       </button>

       <button className='bg-white border-[#4169e1] border-2 text-black h-13 rounded-md p-1 flex justify-center items-center'>
         <div className='w-5'><img  src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="" srcset="" /></div>
       <p className='text-[#4169e1]' onClick={handleRecords}>RECORDS</p>
       </button>
    </div>
    </div>
    <div className="w-full flex flex-col justify-center items-center">

     <div className='flex  p-2'>
      <button className={`${ val==1?'bg-red-500':'bg-[#4169e1]'} text-lg font-bold text-white p-3 rounded-full border-2 `} onClick={handleexpenseclick}>Expense</button>
      <button className={`${ xbtn==1?'bg-green-500':'bg-[#4169e1]'} text-lg font-bold text-white p-3 rounded-full border-2`} onClick={handleIncomeclick}>Income</button>
      </div>
      <div className='w-[60%] bg-[#2a2a2a] flex justify-center items-center p-[50px] shadow-custom-white rounded-md max-md:w-[93%]'>

      
      <div className=' h-60 bg-[#2a2a2a] flex flex-col-reverse justify-between text-white'>
       { val==0?
       <>
        <div>{add==0? 0: add*0}</div>
        <div>{add==0? 0.25:add*1/4}</div>
        <div>{add==0? 0.50:add*1/2}</div>
        <div>{add==0? 1.00:add*1}</div>
        </>
        :
        <>
        <div>{minus==0? 0: props.negatives*0}</div>
        <div>{minus==0? 0.25:"-"+ minus*1/4}</div>
        <div>{minus==0? 0.50: "-"+minus*1/2}</div>
        <div>{minus==0? 1.00:"-"+minus*1}</div>
        </>

       }

 
       </div>

      
    <div className='w-[80%] flex  flex-col border-x-2 border-y-2 border-slate-400 pt-4 justify-center items-center '>

      { val==0?
      <div>
      { add==0?
      <div className='w-14 h-60'></div>
      : 
        <div className='bg-green-600 w-14 h-60'></div>
      }
      </div>
      : <div>
      { minus==0?
      <div className='w-14 h-60'></div>
      : 
        <div className='bg-red-500 w-14 h-60' ></div>
      }
      </div>
}
     
    </div>
  
    </div>
    
    </div>
 
    <ReacentTransaction income={props.income}  xpensive={props.xpensive} openrec={openrec} setopenrec={setopenrec}/>
  
    <div className='w-full flex justify-center items-center'>  <button className=' flex justify-center items-center w-12 h-12 rounded-full bg-white text-black hover:-translate-y-1 hover:scale-110  duration-300' onClick={handleaddpg}><img  src="https://img.icons8.com/android/24/plus.png" alt="plus--v1"/></button> </div>
    </div>
  )
}

export default Home
