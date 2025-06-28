import { useState } from 'react'
import Home from './assets/components/Home'
import { Link, Route, Routes } from 'react-router-dom' 
import User from './assets/components/User'
import About from './assets/components/About'
import Navbar from './assets/components/Navbar'
import Routing from './assets/utils/Routing'

function App() {
    return (
        <>
           
            <Navbar></Navbar>
            <Routing></Routing>
           
        </>
    )
}
export default App
