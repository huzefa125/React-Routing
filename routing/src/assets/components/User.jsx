import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function User() {
    return (
        <div className=' w-1/2 m-auto mt-10'>
            <h1 className='text-5xl text-red-200 mb-2'>User</h1>
            <div className='flex w-1/2 flex-col mt-5'>
                <Link to='/user/john' className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>John</Link>
                <Link to='/user/deo' className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>Doe</Link>
                <Link to='/user/ayush' className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>Ayush</Link>
            </div>
            <button className='text-white p-3 bg-zinc-400'>Explore more</button>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
export default User
