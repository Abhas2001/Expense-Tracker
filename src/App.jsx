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
   let sum = 0;
 for(let i=0;i<income.length;i++){
      sum+=JSON.parse(income[i]);
 }

  return (
    <> 
   

   <Header/>
   { val==0?
   <Home sum={sum} setval={setval} income={income}/>
   :
   <Addpage sum={sum} setval={setval} income={income} setincome={setincome}/>
}
   

    </>
  )
}

export default App
