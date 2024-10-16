import React from 'react'
import { useState } from 'react'
import calendar from '../src/assets/images/calendar.webp'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Addbgtpage = (props) => {

    const[year,setyear] = useState(false);
    console.log(year);

    const handleyearly = () =>{
             setyear(true);
    }
    const handlemonthly = () =>{
        setyear(false);
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];


let years = d.getFullYear();
  return (
    <div>
      <div className='w-full flex justify-between p-2 min-h-20 bg-[#1e1e1e] shadow-custom-white'>

          <div className='flex text-white gap-10'>
            <button onClick={()=>{props.setdetails(0)}}><img width={40} src="https://www.svgrepo.com/show/416435/app-arrow-back.svg" alt="" srcset="" /></button>
            <button className='text-lg font-semibold'>Add budget</button>
          </div>


          <div className='text-white flex justify-center items-center'>
           <img  width={40} src="https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/ico/Help_Circle_Blue.ico" alt="" srcset="" />
          </div>

      </div>

      <div className='flex flex-col gap-14'><div className='w-full flex justify-center items-center mt-10'><button className={`${year==false? 'bg-gray-400':'bg-[#1e1e1e]'} font-mono w-60 rounded-md  text-white border-none  p-2`} onClick={handlemonthly}>Monthly</button> 
              <button className={`${year==true? 'bg-gray-400':'bg-[#1e1e1e]'} font-mono w-60 rounded-md text-white border-2 border-none p-2`} onClick={handleyearly} >Yearly</button></div>



              <section className='w-full flex justify-center items-center text-white'>
                <div className='bg-[#1e1e1e] w-[480px] min-h-36 rounded-lg'>
                <div>
                <p className='text-white font-semibold p-4'>Budget for</p>
                
                <div className='flex pl-4'>
                <input type="image" className='w-10 bg-[#1e1e1e] border-[1px] border-r-0 p-1 border-gray-500 rounded-l-md' src={"https://static-00.iconduck.com/assets.00/calendar-icon-996x1024-jacy15ia.png"} />
                <div className='mt-2 bg-[#1e1e1e] h-6 border-l-[1px] border-gray-500'></div>
                <input type="text" className='w-[300px] bg-[#1e1e1e] border-[1px] p-2 border-l-0 border-gray-500 rounded-r-md' value={year==false? name+','+years : years} />
                
                </div>
                
                </div>
                </div>

                {window.pop}
                </section>

                <section className='w-full flex justify-center items-center text-white'>
                <div className='bg-[#1e1e1e] w-[480px] min-h-36 rounded-lg'>
                <div>
                <p className='text-white font-semibold p-4'>What's your total budget limit?</p>
                
                <div className='flex pl-4'>
                <input type="image" className='w-10 bg-[#1e1e1e] border-[1px] border-r-0 p-1 border-gray-500 rounded-l-md' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmZhVrcr8agqmmRkNKsqb0cun13hsQGgKYg&s"} />
                <div className='mt-2 bg-[#1e1e1e] h-6 border-l-[1px] border-gray-500'></div>
                <input type="number" className='w-[300px] bg-[#1e1e1e] border-[1px] p-2 border-l-0 border-gray-500 rounded-r-md' placeholder='Enter your total budget limit' />
                
                </div>
                
                </div>
                </div>
                </section>

                
              </div>
    </div>
  )
}

export default Addbgtpage
