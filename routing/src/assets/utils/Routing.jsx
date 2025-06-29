import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../components/UserDetails'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<User />} ></Route>
                <Route path='/user/:name' element={<UserDetails />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}
export default Routing
