
import { useState } from 'react'
import Heading from './Components/Heading'
import UserContext from './Context/Context'
function App() {
  // const [count, setCount] = useState(0)
  const [age,setAge] = useState(1)
  const [name,setName] = useState('Rohit')
    
  return (
    <UserContext.Provider value={{age,setAge,name,setName}}>
      <Heading/>
    </UserContext.Provider>
  )
}

export default App
