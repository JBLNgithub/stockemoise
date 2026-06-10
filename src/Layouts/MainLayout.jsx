import { Outlet } from 'react-router-dom'
import NavbarV2 from '../components/navbar/NavbarV2'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const MainLayout = () => {
    return (
        <>
            <ToastContainer />
            <NavbarV2 />

            <section className='bg-indigo-50'>
                <div className='container m-auto py-30 px-6'>
                    <div className='grid grid-cols-4 gap-9'>
                        <article className='col-span-4 md:col-span-3'><Outlet /></article>
                        <aside className='col-span-4 md:col-span-1'><Sidebar /></aside>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default MainLayout