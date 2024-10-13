import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import Goaldetails from './Goaldetails';



const Budget = () => {
     

 
   
  const[flag,setflag] = useState(false);
  const[rinks,setrinks] = useState(false);
  const[goal,setgoal] = useState(false);
  const[addgoal,setaddgoal] = useState(false);
  const[input,setinput] = useState("");
  const[name,setname] = useState("");
  const[targetamount,settargetamount] = useState(0);
  const[savedamount,setsavedamount] = useState(0);
  const[namearr,setnamearr]=useState([])
  const[details,setdetails] = useState(false);
  
    const navigate = useNavigate();

    let percentval=(savedamount*100)/targetamount;


    let mis=localStorage.getItem('minus');

    let x=0;
     x=(mis*100)/input;

     const handlebudget=()=>{
           setflag(true);
     }

      const handleinput = (e) =>{
        setinput(e.target.value)
      }
      

      const handleadd = () =>{
        if(input.length>0){
         setrinks(true);
        }
      }

      const handleedit = () =>{
        setrinks(false);
      }

      const handlegoal = () =>{
        setgoal(true);
      }

      const handlename = (e) =>{
              setname(e.target.value)
      }
      

      
      const handleaddgoal = () =>{
        setaddgoal(true);
        setnamearr((previnput)=>[...previnput,{name:name,savedamount:savedamount,target:targetamount}]);
        setgoal(false)
        console.log(percentval);
}
const goHome = () => {
  navigate('/');
 
}
const handledetailpage = () =>{
          setdetails(true);
}
  return (
    <>

{ details==true? 
<div>

<Goaldetails  savedamount={savedamount} targetamount={targetamount} setdetails={setdetails} percentval={percentval}/>
</div>
:
<div>
<div className='min-h-32'>
    <div className='w-full min-h-20 bg-[#1e1e1e] shadow-custom-white'>
      <h1 className="text-2xl font-bold  text-white">
       Personal Expense
    </h1>
    <div className='flex justify-center items-center gap-20'>
      <button className={`text-white text-xl font-bold cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300`} onClick={goHome} >Home</button>
      <button className={`text-white text-xl font-bold cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 ${'border-b-2'} `} >Budgets</button>
    </div>
    </div>
    </div>





      <div className='w-full flex flex-col gap-10 justify-center items-center'>
      

      <div className='w-[50%] h-40 bg-[#2a2a2a]'>
      <button className='text-white' onClick={()=>{navigate(-1)}}>back</button>
      <button className='text-white' onClick={handlebudget}>create budget</button>
      <div>
        <input className='bg-slate-400' type="text" onInput={handleinput} />
        <button className='text-white'  onClick={handleadd}>add</button>
        <button  className='text-white' onClick={handleedit}>edit</button>

        {
          rinks == true?
          <div className='text-white'>{input}</div>
          :
          <div></div>
        }
      </div>
      <div className='w-[250px] h-[10px] border-2 border-white rounded-full'><div style={{ width: `${(x*250)/100}px` }} className={`h-[8px]  bg-green-500`}></div></div>
      </div>
        

          <div className='w-[50%] min-h-40 bg-[#2a2a2a] p-4'>
            { addgoal==false?
            <div className='w-[60%] flex gap-5 justify-center items-center'>
              <div className='w-[80px] h-[50px]'>
              <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/33/2023/01/goals.png" alt="" srcset="" />
              </div>
              <div>
               <h1 className='text-white font-bold text-2xl'>Goals</h1>
               <p className='text-gray-400 font-serif text-lg'>Set your own goal and a have a quick  <br />overview of your progress</p>
               </div>
               </div>
             :  
               <div className='w-[60%] min-h-10 flex flex-col gap-4'>
                <p className='text-white font-bold text-3xl'>Goals
             <p className='text-sm text-[#D3D3D3]'>This is what i have saved</p>
             </p>

                {namearr.map((x)=>{return(
              <div className='flex flex-col'>
             
             <div className='max-w-[80%] flex justify-between text-white'>
              <p className='text-2xl font-bold text-white'>
                {x.name}
                <p className='text-sm text-[#D3D3D3]'>{"₹"+x.savedamount}</p>
              
              </p>
              <p className='text-[#D3D3D3] flex justify-end items-end'>{Number(percentval.toFixed(1))+"%"}</p>
             </div>
             <div className='flex gap-2 items-center'>
           <progress value={percentval/100} style={{width:350,borderRadius:50,background:"blue"}}>
           <style>
    {`
      progress::-webkit-progress-bar {
        background-color: lightgrey;
        border-radius: 50px;
      }
      progress::-webkit-progress-value {
        background-color: blue;
        border-radius: 50px;
      }
      
    `}
  </style>
</progress>

             <button className='text-white font-bold flex justify-center items-center w-8 h-8' onClick={handledetailpage}><img src="https://img.icons8.com/color/48/right-squared.png" alt="" srcset="" /></button>
             </div>
              </div>
              )})
            }
               </div>
             }

               <button className='text-blue-500 font-bold text-2xl pt-8' onClick={handlegoal} >Create Goal</button>
          </div>






        {goal==true?
             
          <div className='w-[50%] h-50 bg-[#2a2a2a] p-4'>
             <div className='w-full flex justify-between text-white'> 
              <div className='flex gap-5'><button  className='w-6 h-6' onClick={handleaddgoal}><img src="https://cdn4.iconfinder.com/data/icons/round-buttons/512/blue_tick.png" alt="" srcset="" /></button> <p className='text-xl font-bold'>New Goal</p></div>
              <button className='w-6 h-6'onClick={()=>setgoal(false)}><img src="https://img.icons8.com/p1em/512/228BE6/filled-cancel.png" alt="" srcset="" /></button>
             
             
             </div>

          <div className='text-gray-400'>Name</div>
            <input type="text" className='bg-[#2a2a2a] border-b-2 border-black text-white' onChange={handlename} />

             <div className='text-white'>Target Amount</div>
            <input type="text" onChange={(e)=>{settargetamount(e.target.value)}} className='bg-[#2a2a2a] border-b-2 border-black text-white' />

            <div className='text-white'>Saved Amount</div>
            <input type="text" className='bg-[#2a2a2a] border-b-2 border-black text-white' onChange={(e)=>{setsavedamount(e.target.value)}} />

            <div className='text-white'>Note</div>
            <input type="text" className='bg-[#2a2a2a] border-b-2 border-black text-white' />
          </div>
          :
          null


          }








          
         
        
          </div>
          </div>
}

    </>
  )
}

export default Budget
