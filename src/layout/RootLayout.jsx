import React from 'react'
import Navbar from '../components/Navbar'
import NavHader from '../components/NavHader'
import Orebi from '../components/Orebi'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <NavHader/>
    <Outlet/>
    <Orebi/>
    </>
  )
}

export default RootLayout