import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';

const Goaldetails = (props) => {

    const percentage = 66;
  return (
    <div>
      <div className='w-full min-h-20 bg-[#1e1e1e] flex justify-between shadow-custom-white'>
        <div className='w-[200px] min-h-[70px] flex justify-center items-center gap-2'>
            <button onClick={()=>{props.setdetails(false)}}>
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


    <div><CircularProgress value={58} /></div>
    </div>
  )
}

export default Goaldetails
