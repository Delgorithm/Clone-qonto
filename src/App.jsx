import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Authentification/Signup'
import Signin from './Pages/Authentification/Signin'
import Offering from './Pages/Offering/Offering'
import Home from './Pages/Home/Home'
import OpenAccount from './Pages/OpenAccount/OpenAccount'
import Error from './Pages/Error/Error'

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