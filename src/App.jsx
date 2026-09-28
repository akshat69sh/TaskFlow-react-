import './App.css'
import {  Route, Routes } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  

  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>

        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />


      </Route>
    </Routes>
    </>
  )
}

export default App
