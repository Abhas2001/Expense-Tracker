import React from 'react'

const Home = (props) => {

    const handleaddpg =()=>{
        props.setval(1)
    }
   
  return (
    <div className= 'w-full h-full flex flex-col justify-between gap-24'>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[60%] h-[14rem] rounded-md bg-white flex justify-between shadow-lg shadow-black'>
       <p>Current Balance</p>
       <p>{props.sum}</p>
    </div>
    </div>
    <div className="w-full flex justify-center items-center">
   
      <div className='w-[60%] bg-white flex justify-center items-center p-5 shadow-lg shadow-black rounded-md'>
      <div className=' h-60 bg-white flex flex-col-reverse justify-between'>
      
        <div>{props.sum==0? 0: props.sum*0}</div>
        <div>{props.sum==0? 0.25:props.sum*1/4}</div>
        <div>{props.sum==0? 0.50:props.sum*1/2}</div>
        <div>{props.sum==0? 1.00:props.sum*1}</div>

 
       </div>
    <div className='w-[80%] flex  flex-col border-x-2 border-y-2 border-slate-400 pt-4 justify-center items-center '>
      { props.sum==0?
      <div className='w-14 h-60'></div>
      :
        <div className={`bg-green-600 w-14 h-60 `} ></div>
      }
     
    </div>
  
    </div>
    
    </div>
    <div className='w-full flex justify-center items-center'>  <button className='bg-white w-10' onClick={handleaddpg}>add</button> </div>
    </div>
  )
}

export default Home
