import React from 'react'

function CustomButton(props) {
  return (
    <div>
        <button className=" flex justify-center align-middle outline-none px-2 py-1 rounded-xl m-2" style={{backgroundColor:props.color}}>
            {props.color}
        </button>
    </div>
  )
}

export default CustomButton