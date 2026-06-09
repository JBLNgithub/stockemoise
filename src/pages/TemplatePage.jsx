import Sidebar from '../components/sidebar/Sidebar'


const TemplatePage = ({children}) => {
  return (
    <section className='bg-indigo-50'>
        <div className='container m-auto py-30 px-6'>
            <div className='grid grid-cols-4 gap-9'>
                <article className='col-span-4 md:col-span-3'>{children}</article>
                <aside className='col-span-4 md:col-span-1'><Sidebar /></aside>
            </div>
        </div>
    </section>
  )
}

export default TemplatePage