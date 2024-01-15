import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [password, SetPassword] = useState("")
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharacterAllowed] = useState(false)
  const [bgColor, setBGColor]=useState("White")
  const genratePasswords= useCallback(()=>{
    let newPassword = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    const numbers= "123456789"
    const specialChar="(&*#$){}~`!%+-/=?"
    if(numberAllowed){
      str += numbers
    }
    if(charAllowed){
      str += specialChar
    }
    for (let i = 1; i <= length; i++) {
      newPassword+=  str[Math.floor(Math.random() *str.length +1 )]
      // newPassword+=str.charAt(char);
    }
    SetPassword(newPassword)
  }, [SetPassword,length,numberAllowed,charAllowed])
 
  const passRef= useRef(password);

  const changeBg=()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
    setBGColor("blue")
    setTimeout(() => {
      setBGColor("White")
    }, 100);
  }
  useEffect(()=>{
    genratePasswords()
  },[genratePasswords,numberAllowed,charAllowed,length])


  return (
    <div className='bg-black h-screen w-full flex justify-center items-center'>
        <div className=" border-red-800 ">
          <div className='flex'>
              <input  className='w-80 h-7 rounded-lg' type="text" value={password} ref={passRef} onChange={(e)=>SetPassword(e.target.value)}   readOnly />
              <button style={{backgroundColor:bgColor}} onClick={changeBg} className=' text-black rounded-lg ml-2 cursor-pointer'>Copy</button>
          </div>
          <div className='flex gap-2 mt-2'>
            <div className='flex  '>
              <input type="range" value={length} min={6} max={20} onChange={(e)=>setLength(e.target.value)}/>
              <label className='text-white'>length: {length}</label>
            </div>
            <div className='flex'>
              <input type="checkbox" onChange={()=>setNumberAllowed((prev)=>!prev)}/>
              <label className='text-white'>Number</label>
            </div>
            <div className='flex'>
              <input type="checkbox" onChange={()=>setCharacterAllowed((prev)=>!prev)}/>
              <label className='text-white'>Character</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
