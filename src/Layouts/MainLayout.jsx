import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TemplatePage from '../pages/TemplatePage'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const MainLayout = () => {
    return (
        <>
            <ToastContainer />
            <Navbar />

            <TemplatePage>
                <Outlet />
            </TemplatePage>
            
            <Footer />
        </>
    )
}

export default MainLayout