import React from 'react'

const Records = (props) => {
  
  const cdate = new Date().toLocaleDateString();
  const handleback=()=>{
    props.setopenrec(false);
  }

  const entireTransactions = [...props.income.map(item => ({ type: 'income', amount: item })), 
  ...props.xpensive.map(item => ({ type: 'expense', amount: item }))]

  
  return (
    <div>
      <div className='w-full text-white'>
     <button className='w-8 h-8  text-white' onClick={handleback}><img width="58" height="58" src="https://img.icons8.com/color/48/circled-left-2--v1.png" alt="circled-left-2--v1"/></button>

   
     { entireTransactions.map((x)=>{return(
    <div className='w-full flex flex-col gap-4 justify-center items-center '>
   
    <div className='w-[90%] h-30 bg-[#2a2a2a] text-white flex justify-between gap-2 border-b-2 border-slate-100 shadow-custom-white max-md:w-[93%]'>
             
            
             <div> <h1 className='text-3xl'>{ 'Income'}</h1>
       <p className={x.type=='income'?'text-green-500':'text-red-500'}>Amount {x.amount}</p>
       </div>
       

       <div className='flex flex-col justify-center'>
       <p>Catagoury </p>
       <p>{cdate}</p>
       </div>
  
    </div>
  
    </div>
    )})
}
</div>
    </div>
  )
}

export default Records
