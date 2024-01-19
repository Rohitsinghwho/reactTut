
// import ContextProvider from '../Context/ContextProvider'

import { useContext } from "react"
import UserContext from "../Context/Context"

const Heading = () => {
//   const {name,setName,age,setAge}= useContext(ContextProvider)
 const {name,setName,age,setAge} = useContext(UserContext)
  return (
    <h1>Hey i Am  {name} </h1>
  )
}

export default Heading