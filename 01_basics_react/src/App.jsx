// basic couter app learning use state 
//tO UPDATE the state of a UI componet we have to use USE state hook 
import { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  
  const IncreaseCounter=()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const DecreaseCounter=()=>{
    if(count>1){

      setCount(count-1)
    }
  }
  return (
    <>
     <h1>Counter</h1>
     <p>Increased Counter by: {count}</p> 
     <button onClick={IncreaseCounter}>Increase {count}</button>
     <button onClick={DecreaseCounter}>Decrease {count}</button>
    </>
  )
}

export default App
