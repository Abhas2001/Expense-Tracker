import React from 'react'
import { useState } from 'react'

const Included = (props) => {

    const[val,setval]=useState(false);
    const[arrc,setarrc] = useState([]);
    const[searchval,setsearchval] = useState('');
    const[flag,setflag] = useState(false);
    console.log(arrc.length);
    console.log(flag);
    props.setfinal(arrc);
    const handleinput = (e) =>{
            setsearchval(e.target.value);
            setflag(true);
    }
  return (
    <div className='w-full flex flex-col justify-center gap-6 items-center text-white'>
   
        <div className=' w-[25%] flex justify-between'>

            <div>
       Select Included Categories
       </div>

       <button className='text-white' onClick={()=>props.setisvisible(false)}>back</button>
       </div>
        
        <input onInput={handleinput} className={`${flag==false?'w-[25%]':'w-[10%]'} rounded-lg bg-[#1e1e1e] p-1`} type="text" placeholder='Search' />
     <div className='flex flex-col gap-8'>
       { 
        props.arr.map((x)=>{
            return(

               
                <div onClick={()=>setarrc((prev)=>[...prev,x.ind])} className=' bg-[#1e1e1e] w-[480px] min-h-16 rounded-lg'>

                <div className='w-full h-[60px] flex'>
                   <div className='w-[600vh] h-[60px] flex gap-3 justify-center items-center'>
                    <div className='object-cover  w-10'>
                   <img style={{borderRadius: '50%'}}  width={100} src={x.img} alt="" srcset="" />
                   </div>
                   <div className='w-full justify-center items-center'>
                    {x.ind}
                    </div>
                   </div>
                   
                  <div className='w-full h-[100%] flex justify-center items-center'>
                    <div className='w-full h-5 rounded-full' onClick={()=>setval(true)}>
                 { arrc.includes(x.ind)?

                  <div className='w-4 h-4 rounded-full border-2 border-white'> <img className='w-3 h-3' src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620784_ycBC9Ii1Sc4e86V78Hv5ByRRI1IaCuF1.jpg" alt="" srcset="" /></div>
                  :
                  
                  <div className='w-4 h-4 rounded-full border-2 border-white'></div>   
                    
                
                 }
                    </div>
                    </div>
                    </div>
                
                
                </div>
            )
        })
       }
</div>
       
    </div>
   
  )
}

export default Included
