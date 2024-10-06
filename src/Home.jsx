import React from 'react'
import { useState } from 'react'

const Home = (props) => {

  const[val,setval]=useState(0);
  const[xbtn,setxbtn]=useState(0);

    const handleaddpg =()=>{
        props.setval(1)
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
      props.setval(2);
    }

    console.log(props.val);
  return (
    <div className= 'w-full h-full flex flex-col justify-between gap-24'>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[60%] h-[10rem] rounded-md bg-white flex justify-center items-center gap-10 shadow-lg shadow-black max-md:w-[100%]'>
      <button className='bg-[#4169e1] border-[#4169e1] border-2 text-white h-13 rounded-md p-1'>
       <p className='text-xs font-bold'>Current Balance</p>
       <p className='text-xs font-bold'>{"₹"+(props.sum - props.negatives)}</p>
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
      <div className='w-[60%] bg-white flex justify-center items-center p-5 shadow-lg shadow-black rounded-md max-md:w-[100%]'>

      
      <div className=' h-60 bg-white flex flex-col-reverse justify-between'>
       { val==0?
       <>
        <div>{props.sum==0? 0: props.sum*0}</div>
        <div>{props.sum==0? 0.25:props.sum*1/4}</div>
        <div>{props.sum==0? 0.50:props.sum*1/2}</div>
        <div>{props.sum==0? 1.00:props.sum*1}</div>
        </>
        :
        <>
        <div>{props.negatives==0? 0: props.negatives*0}</div>
        <div>{props.negatives==0? 0.25:"-"+ props.negatives*1/4}</div>
        <div>{props.negatives==0? 0.50: "-"+props.negatives*1/2}</div>
        <div>{props.negatives==0? 1.00:"-"+props.negatives*1}</div>
        </>

       }

 
       </div>

      
    <div className='w-[80%] flex  flex-col border-x-2 border-y-2 border-slate-400 pt-4 justify-center items-center '>

      { val==0?
      <div>
      { props.sum==0?
      <div className='w-14 h-60'></div>
      : 
        <div className='bg-green-600 w-14 h-60'></div>
      }
      </div>
      : <div>
      { props.negatives==0?
      <div className='w-14 h-60'></div>
      : 
        <div className='bg-red-500 w-14 h-60' ></div>
      }
      </div>
}
     
    </div>
  
    </div>
    
    </div>
    <div className='w-full flex justify-center items-center'>  <button className=' w-12 h-12 rounded-full bg-[#4169e1] text-white' onClick={handleaddpg}>+</button> </div>
    </div>
  )
}

export default Home
