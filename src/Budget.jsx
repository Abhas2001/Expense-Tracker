import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header';

const Budget = () => {

    const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className='w-full flex flex-col gap-10 '>
      
      

      <div>
      <button className='bg-white' onClick={()=>{navigate(-1)}}>back</button>
      </div>
    </div>
    </>
  )
}

export default Budget
