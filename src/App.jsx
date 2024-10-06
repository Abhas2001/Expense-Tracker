import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Home from './Home';
import Addpage from './Addpage';

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

 console.log(negatives);

 console.log(xpensive);

  return (
    <> 
   

   <Header/>
   { val==0?
   <Home negatives={negatives} xpensive={xpensive} sum={sum} setval={setval} income={income}/>
   :
   <Addpage xpensive={xpensive} setxpensive={setxpensive} val={val} sum={sum} setval={setval} income={income} setincome={setincome}/>
}
   

    </>
  )
}

export default App
