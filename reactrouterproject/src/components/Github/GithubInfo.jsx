// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GithubInfo = () => {
    const data= useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    // },[])
  return (
    <div className='bg-gray-800 text-white flex justify-center'>
         <div>GithubInfo : {data.followers} </div>
         <div><img src={data.avatar_url} alt="" /></div>
    </div>
  )
}

export default GithubInfo

export const GithubFetch=async()=>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}