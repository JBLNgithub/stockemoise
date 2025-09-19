import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TemplatePage from '../pages/TemplatePage'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <TemplatePage>
            <Outlet />
        </TemplatePage>
    </>
  )
}

export default MainLayout