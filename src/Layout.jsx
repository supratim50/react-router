import React from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Fotter'
import Header from './components/Headers/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout