import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className='mt-10 flex justify-center gap-10'>
                <NavLink to="/" className={(e)=>{
                    return [
                        e.isActive ? "text-red-700" : "",
                        e.isActive ? "text-semibold" : "",
                    ].join(" ")
                }}
                >Home</NavLink>
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                        fontWeight : e.isActive ? "bold" : "",
                    } 
                }} to="/user">User</NavLink>
                <NavLink 
                className={(e)=>{
                    return [
                        e.isActive ? "text-red-500" : '',
                        e.isActive ? "text-semibold" : ''
                    ].join(" ")
                }}
                to="/about">About</NavLink>
            </nav>
        </div>
    )
}
export default Navbar