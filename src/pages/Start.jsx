import React from 'react'
import { Link } from 'react-router-dom'



const Start = () => {


  return (
    <div className='h-screen w-full'>
        <div>
       <div className='bg-cover bg-center h-screen bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 flex justify-between flex-col w-full '>
       <img className='w-[120px] sm:w-[100px] ml-8' src="" alt="" />
       <div className='bg-white pb-8 py-4 px-4'>
        <h2 className='text-[30px] font-semibold'>Get Started with Fixsy</h2>
         <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue </Link>
       </div>
       </div>
        </div>
    </div>
  )
}

export default Start