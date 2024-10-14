import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Home from './Home';
import Addpage from './Addpage';
import Records from './Records';
import Budget from './Budget';
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { Goalcontext } from './Goal';

function App() {

  const[val , setval] = useState(0)
  const[income,setincome]=useState([])
  const[xpensive,setxpensive]=useState([])
   let sum = 0;
   let negatives = 0;
 for(let i=0;i<income.length;i++){
      sum+=JSON.parse(income[i]);
 }

 for(let j=0;j<xpensive.length;j++){
   negatives+=JSON.parse(xpensive[j]);
 }

 console.log(income);
 

  return (
    <> 

    <Goalcontext.Provider value={{sum,negatives,income,val,xpensive,setincome,setxpensive,setval}}>
   <BrowserRouter>

   <Routes>
   <Route path='' element={<Header negatives={negatives} xpensive={xpensive} sum={sum} setval={setval} income={income}/>}/>

   <Route path='/addpage' element={<Addpage xpensive={xpensive} setxpensive={setxpensive} val={val} sum={sum} setval={setval} income={income} setincome={setincome}/>}/>

    <Route path='/budget' element={<Budget/>} />

    <Route path='records' element={<Records/>}/>

   
</Routes>
</BrowserRouter>
</Goalcontext.Provider>

    </>
  )
}

export default App
