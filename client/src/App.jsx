import React from 'react'
import { Route, Routes } from "react-router-dom"
import Hoome from './home/Home.jsx'
import Materials from './components/Materials'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Hoome/>}  />
        <Route path='/materials' element={<Materials/>}  />
        <Route path='/signup' element={<Signup/>}  />
      </Routes>
      </div>
    </>
  )
}

export default App