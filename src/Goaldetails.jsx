import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Goaldetails = (props) => {

   console.log(props.percentval);
   let estimation = props.targetamount/props.savedamount;
  return (
    <>
    <div>
      <div className='w-full min-h-20 bg-[#1e1e1e] flex justify-between shadow-custom-white'>
        <div className='w-[200px] min-h-[70px] flex justify-center items-center gap-2'>
            <button onClick={()=>{props.setdetails(0)}}>
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/circled-left-2--v1.png" alt="circled-left-2--v1"/>
        </button>
      <h1 className="text-2xl font-bold  text-white">
               Goal details
    </h1>
    </div>

    <div className='w-[200px] min-h-[70px] flex justify-center items-center '>
        <button><img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/edit.png" alt="edit"/></button>
    </div>
    </div>
<div className='w-full min-h-[300px] flex flex-col justify-center items-center'>
    <div className='bg-black w-[400px] h-[290px] flex justify-center items-center'>  
     <div style={{ width: 200, height: 200 }} >
  <CircularProgressbar value={props.percentval} text={`${Number(props.percentval.toFixed(1))}%`}/>
</div>
</div>

<div className='text-white font-bold'>₹{props.savedamount}/₹{props.targetamount}</div>

<div className='text-[#D3D3D3] pt-5 font-bold'>Last Added Week Amount</div>
<p className='text-white font-bold text-xl'>₹0</p>

<div className='text-[#D3D3D3] pt-5 font-bold'>Estimated Time To reach the Goal</div>
<p className='text-white font-bold text-xl'>{Number(estimation.toFixed(1))}Weeks</p>

<div className='flex flex-col justify-center items-center h-[220px] gap-4'>
    <button className='w-[250px] bg-[#4169e1] text-white p-2'>Add Saved Amount</button>
    <button className='w-[250px] text-[#4169e1] border-2 border-[#4169e1] p-2'>Set Goal Reached</button>
</div>
</div>


    </div>
    </>
  )
}

export default Goaldetails
