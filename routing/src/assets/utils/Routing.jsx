import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import { Link, Route, Routes } from 'react-router-dom' 

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<User />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default Routing
