import Sidebar from '../components/Sidebar'
import ContextProvider from '../components/ContextProvider'


const TemplatePage = ({children}) => {
  return (
    <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-4 gap-9'>
              <ContextProvider>
                <article className='col-span-4 md:col-span-3'>{children}</article>
                <aside className='col-span-4 md:col-span-1'><Sidebar /></aside>
              </ContextProvider>
            </div>
        </div>
    </section>
  )
}

export default TemplatePage