import React from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/signin' element={ <Signin/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/offering' element={ <Offering/> } />
        <Route path='/openaccount' element={ <OpenAccount/> } />
        <Route path='/error' element={ <Error/> } />
      </Routes>
    </div>
  )
}

export default App