import React from 'react'
import { useState } from 'react'
import calendar from '../src/assets/images/calendar.webp'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';
import Included from './Included';

const Addbgtpage = (props) => {

    const[year,setyear] = useState(false);
  
    const[final,setfinal] =useState([]);

    const[budgetval,setbudgetval]=useState()

   
    
const[isvisible,setisvisible] = useState(false);




    const handleyearly = () =>{
             setyear(true);
    }
    const handlemonthly = () =>{
        setyear(false);
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

const arr = [


  {img:"https://cdn-icons-png.flaticon.com/512/2550/2550282.png", ind:'Others'},
  {img:"https://cdn-icons-png.flaticon.com/512/2819/2819194.png", ind:'Food'},
  {img:"https://cdn-icons-png.freepik.com/512/9638/9638882.png", ind:'Shopping'},
  {img:"https://cdn-icons-png.flaticon.com/512/5086/5086786.png", ind:'Travelling'},
  {img:"https://w1.pngwing.com/pngs/608/471/png-transparent-games-icon-video-games-game-controllers-symbol-racing-video-game-icon-design-mobile-game-yellow.png", ind:'Entertainment'},
  {img:"https://www.freeiconspng.com/thumbs/medicine-icon/medicine-icon-15.png", ind:'Medical'},
  {img:"https://cdn-icons-png.flaticon.com/512/4933/4933123.png", ind:'SelfCare'},
  {img:"https://cdn-icons-png.flaticon.com/512/4366/4366867.png", ind:'Education'},
  {img:"https://www.nicepng.com/png/full/866-8660117_growth-investment-growth-icon-png.png", ind:'Investments'},
  {img:"https://cdn-icons-png.freepik.com/256/3058/3058953.png?semt=ais_hybrid", ind:'Bills'},
  {img:"https://cdn-icons-png.flaticon.com/512/2596/2596025.png", ind:'Insurance'},
  {img:"https://icons.iconarchive.com/icons/iconarchive/gift/512/Blue-Gift-icon.png", ind:'Gifts'}





]
        const[index,setindex]=useState(0)
        const[newarr ,setnewarr] = useState([]);
        useEffect(()=>{
          if(index<arr.length){
        setnewarr(arr.slice(index,index+4))
          }
        },[index])


let years = d.getFullYear();

const handlebudgets=()=> {
     props.setbudgetlimit(budgetval);
     props.setdummy(true);
}


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


              {
                isvisible?
                <div className='transition-all duration-10000 ease-in'><Included setfinal={setfinal} arr={arr} setisvisible={setisvisible}/></div>
                :
                <div className='flex flex-col gap-10'>
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

                </section>

                <section className='w-full flex justify-center items-center text-white'>
                <div className='bg-[#1e1e1e] w-[480px] min-h-36 rounded-lg'>
                <div>
                <p className='text-white font-semibold p-4'>What's your total budget limit?</p>
                
                <div className='flex pl-4'>
                <input type="image" className='w-10 bg-[#1e1e1e] border-[1px] border-r-0 p-1 border-gray-500 rounded-l-md' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmZhVrcr8agqmmRkNKsqb0cun13hsQGgKYg&s"} />
                <div className='mt-2 bg-[#1e1e1e] h-6 border-l-[1px] border-gray-500'></div>
                <input onChange={(e)=>setbudgetval(e.target.value)} type="number" className='w-[300px] bg-[#1e1e1e] border-[1px] p-2 border-l-0 border-gray-500 rounded-r-md' placeholder='Enter your total budget limit' />
                
                </div>
                
                </div>
                </div>
                </section>



                <section className='w-full flex justify-center items-center text-white'>
                <div className='bg-[#1e1e1e] w-[480px] min-h-60 rounded-lg'>
                <div>
                  <div className='w-full flex justify-between '>
                    <div>
                <p className='text-white font-semibold pl-4 pt-4'>Included Categories</p>
                <p className='pl-4 pb-8 text-sm'>{final.length>0? final.length:'All'} Categories included in your budget</p>
                </div>
                  <button className='p-4' onClick={()=>setisvisible(true)}>
                <img style={{borderRadius: '50%'}}  width={30}   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8diz-oQPJ1iwbaZOzqNlxQUuLyYhFCszkw&s" alt="" srcset="" />
                </button>
                </div>
                 
                 <div className='w-full flex justify-around items-center gap-3 '>
                  <button onClick={()=>{index>0?setindex(index-4):null}}>{'<'}</button>

                  { final.length>0?
                  
                    final.map((x)=>{return(
                      <div className='w-4 h-12 flex  rounded-full'>
                           
                        <div className='object-cover'>
                       <img style={{borderRadius: '50%'}}  width={40} src={x.img} alt="" srcset="" />

                       <div>
                      <p>{x.name}</p>
                        </div>
                       </div>
                      
                      
                      
                       </div>
                         
                       )})
                  :
               newarr.map((x)=>{return(
                  <div className='w-12 h-12 flex flex-col justify-between items-center  rounded-full'>

                    <div className='object-cover'>
                   <img style={{borderRadius: '50%'}}  width={100} src={x.img} alt="" srcset="" />
                   </div>
                  
                  
                   <div>

                    <p>{x.ind}</p>
                   
                    </div>
                   </div>
                     
                   )})

                  
}

                 <button onClick={()=>{setindex(index+4)}}>{'>'}</button>
                 </div>
                
                </div>
                </div>
                </section>
                </div>
}

                
              </div>

              <div onClick={handlebudgets} className='w-full flex justify-center items-center mt-5'><button className='w-40 rounded-md p-2 bg-white text-black'>Save</button></div>
    </div>
  )
}

export default Addbgtpage
