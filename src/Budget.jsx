import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import Goaldetails from './Goaldetails';
import Addbgtpage from './Addbgtpage';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';



const Budget = (props) => {
     
  let fsum = localStorage.getItem('text');
  console.log(fsum);

 
   const[dummy,setdummy]=useState(false);
  const[flag,setflag] = useState(false);
  const[rinks,setrinks] = useState(false);
  const[goal,setgoal] = useState(false);
  const[addgoal,setaddgoal] = useState(false);
  const[input,setinput] = useState("");
  const[name,setname] = useState("");
  const[targetamount,settargetamount] = useState(0);
  const[savedamount,setsavedamount] = useState(0);
  const[namearr,setnamearr]=useState([])
  const[details,setdetails] = useState(0);
  const[budgetlimit,setbudgetlimit] = useState();
  
    const navigate = useNavigate();

    let percentval=(savedamount*100)/targetamount;


    let mis=localStorage.getItem('minus');

    let x=0;
     x=(mis*100)/input;

     console.log(budgetlimit);

     const handlebudget=()=>{
           setflag(true);
     }
  const handleaddbtpage = () =>{
   setdetails(2)
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
          setdetails(1);
}

const d=new Date();
let years=d.getFullYear();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let names = month[d.getMonth()];

console.log(props.sum);

let color = "red"

function Mummy(){
  return(
    <>
    <div className='flex justify-between'>
  <div className='p-3 flex flex-col gap-2'>
    <div>
      <div className='text-white text-xl font-bold'>{names+","+ " " +years}</div>
    <div className='text-gray-400'>{"Budget:"+ "$"+budgetlimit}</div>
    </div>
    <div>
      <div className='text-gray-400'>Total Spent</div>
      <p className='text-white font-semibold'>${fsum}</p>
    </div>
     
     <div>
    <div className='text-gray-400'>Available Budget</div>
    <div className='text-red-500 font-semibold '>{budgetlimit-fsum}</div>
    </div>
    </div>

      
    <div className='w-24 flex justify-center items-center relative right-5'>
      
    <CircularProgressbar styles={buildStyles({pathColor:color,textColor:"white"})} strokeWidth={10}  value={(fsum*100)/budgetlimit} text={((fsum*100)/budgetlimit).toFixed(1)+"%" }/>
      
      
      </div>
    </div>
    </>
  )
}


  return (


    <>


  

{


details==1? 
<div>

<Goaldetails  savedamount={savedamount} targetamount={targetamount} setdetails={setdetails} percentval={percentval}/>
</div>
: details ==2?

<div>
  <Addbgtpage setdummy={setdummy} setbudgetlimit={setbudgetlimit} setdetails={setdetails}/>
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
      <button className={`text-white text-xl font-bold cursor-pointer  hover:-translate-y-1 hover:scale-110  duration-300 `}>Analysis</button>
      <button className={`text-white text-xl font-bold cursor-pointer  hover:-translate-y-1 hover:scale-110  duration-300 `} >Bank</button>
    </div>
    </div>
    </div>



    <button className='text-white' onClick={()=>{navigate(-1)}}>back</button>

      <div className='w-full flex flex-col gap-10 justify-center items-center'>
      
    {dummy?<div className='w-[50%] h-52 bg-[#2a2a2a]'><Mummy/></div>:    
      <div className='w-[50%] h-40 bg-[#2a2a2a]'>
      
     <div className='flex p-2'>
      <div className='text-lg text-white'>

        <div className='text-white text-3xl font-bold' onClick={()=>setdummy(true)}>No Budget For This Month ?</div>

        <div className='flex gap-5 h-14'>
          <div>
        <p className='text-gray-400'>
      setting a budget for your spending for future 
      </p>
      
      <p className='text-gray-400'>
      is a crucial step for acheiving goal
      </p>
      </div>
      <div>
        <img width={80} src="https://cdn-icons-png.flaticon.com/512/781/781831.png" alt="" srcset="" />
      </div>
      </div>
      </div>


      
     </div>
      <div className='w-[21%] flex justify-center items-center'>
       
        <button className='text-black w-[190px] h-10 bg-white text-lg font-semibold rounded-lg'  onClick={handleaddbtpage}>Set Up Budget</button>
       

      
      </div>

      </div>
}
        

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

               <button className='text-black w-[190px] h-10 bg-white text-lg font-semibold rounded-lg'  onClick={handlegoal} >Create Goal</button>
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
