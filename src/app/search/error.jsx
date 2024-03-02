"use client"
import React, { useEffect } from 'react'

const error = ({error, reset}) => {
    useEffect(()=>{
        console.log("error", error)
    },[error])
  return (
    <div className="flex items-center justify-center pt-10">
      <h1 className=' text-3xl mb-4'>Something went wrong!</h1>
      <button className=" text-blue-500">Try again</button>
    </div>
  )
}

export default error
