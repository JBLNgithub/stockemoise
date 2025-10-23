import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TemplatePage from '../pages/TemplatePage'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <>
        <Navbar />

        <TemplatePage>
            <Outlet />
        </TemplatePage>
        
        <Footer />
    </>
  )
}

export default MainLayout