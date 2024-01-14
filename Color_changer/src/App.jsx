import { useState } from 'react'
import CustomButton from './components/CustomButton'

function App() {
  const [color, setColor] = useState("Olive")
  return (
      <div className='w-full h-screen' style={{backgroundColor:color}}> 
        <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-4 shadow-lg'>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:"blue"}} onClick={()=>setColor("Blue")}>Blue</button>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2"  style={{backgroundColor:"yellow"}} onClick={()=>setColor("Yellow")}>Yellow</button>
            <button lassName=" flex justify-center align-middle outline-none px-4 py-3 rounded-xl m-2" style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")}>Green</button>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:"Gray"}} onClick={()=>setColor("Gray")} >Gray</button>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:"pink"}} onClick={()=>setColor("Pink")}>Pink</button>
            <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:"sky"}} onClick={()=>setColor("sky")}>sky</button>


            
          </div>
        </div>
      </div>
  )
}

export default App
