import React from 'react'
import User from './User'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const { name } = useParams()
    const navigate = useNavigate();
     const GoBackHandler = () =>{  
        navigate(-1) 
    }
  return (
    <div className=' w-1/2 m-auto mt-10'>
            <h1 className='text-5xl text-red-200 mb-2'>User Deatils</h1>
            <h1 className='text-3xl '>Hii {name}</h1>
            <button className='text-white p-3 bg-red-300 text-white mt-5 hover:bg-red-600' onClick={GoBackHandler}>Go Back</button>
        </div>
  )
}

export default UserDetails
