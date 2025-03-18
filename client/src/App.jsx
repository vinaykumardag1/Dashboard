import React from 'react'
import Dashboard from "./pages/Dashboard"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/Settings' element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
    // <div>
    //   <Dashboard/>
    // </div>
  )
}

export default App
