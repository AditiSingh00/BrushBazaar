import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './home/Home'
import Materials from './components/Materials'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/materials' element={<Materials/>}  />
        <Route path='/signup' element={<Signup/>}  />
      </Routes>
      </div>
    </>
  )
}

export default App