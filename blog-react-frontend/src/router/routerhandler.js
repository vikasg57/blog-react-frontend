import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/home'
import { Login } from '../components/login'
import { Signup } from '../components/signup'

export const Routehandler = () => {
  return (
    <Routes>
        <Route path={"/signup"} element={<Signup/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/home"} element={<Home/>} />
        
            </Routes>
  )
}
