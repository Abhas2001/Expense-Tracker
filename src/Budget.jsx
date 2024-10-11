import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';


const Budget = () => {
     
   
  const[flag,setflag] = useState(false);
  const[rinks,setrinks] = useState(false);
  const[goal,setgoal] = useState(false);
  const[addgoal,setaddgoal] = useState(false);
  const[input,setinput] = useState("");
  const[name,setname] = useState("");
  const[targetamount,settargetamount] = useState("");
  const[namearr,setnamearr]=useState([])
    const navigate = useNavigate();


    let mis=localStorage.getItem('minus');

    console.log(mis);
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

      const handleaddgoal = () =>{
              setaddgoal(true);
              setnamearr((previnput)=>[...previnput,{name:name,targetamount:targetamount}]);
              setgoal(false)
      }
      const handlename = (e) =>{
              setname(e.target.value)
      }
    
   console.log(namearr);
      console.log(name);
  return (
    <>
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
               <div className='w-[60%] min-h-40 flex flex-col gap-5 '>

                {namearr.map((x)=>{return(
              <div>
             <p className='text-white font-bold text-xl'>Goals</p>
             <div className='max-w-[80%] flex justify-between text-white'>
              <p>{x.name}</p>
              <p>{x.targetamount}</p>
             </div>
             <div className='flex gap-2 items-center'>
             <div className='w-[300px] h-3 bg-white rounded-lg '></div>

             <button className='text-white font-bold'>Open</button>
             </div>
              </div>
              )})
            }
               </div>
             }

               <button className='text-blue-500 font-bold text-xl' onClick={handlegoal} >Create Goal</button>
          </div>






        {goal==true?
             
          <div className='w-[50%] h-50 bg-[#2a2a2a] p-4'>
             <div className='w-full flex justify-between text-white'> 
              <div className='flex gap-5'><button  className='w-6 h-6' onClick={handleaddgoal}><img src="https://cdn4.iconfinder.com/data/icons/round-buttons/512/blue_tick.png" alt="" srcset="" /></button> <p className='text-xl font-bold'>New Goal</p></div>
              <button className='w-6 h-6'onClick={()=>setgoal(false)}><img src="https://img.icons8.com/p1em/512/228BE6/filled-cancel.png" alt="" srcset="" /></button>
             
             
             </div>

          <div className='text-white'>Name</div>
            <input type="text" className='bg-gray-500' onChange={handlename} />

             <div className='text-white'>Target Amount</div>
            <input type="text" onChange={(e)=>{settargetamount(e.target.value)}} className='bg-gray-500' />

            <div className='text-white'>Saved Amount</div>
            <input type="text" className='bg-gray-500' />

            <div className='text-white'>Note</div>
            <input type="text" className='bg-gray-500' />
          </div>
          :
          null


          }








          
         
        
          </div>
    </>
  )
}

export default Budget
