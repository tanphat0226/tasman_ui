import { Outlet } from 'react-router'
import SideBar from '../components/SideBar.jsx'

const AppLayout = () => {
  return (
    <main className='flex h-screen'>
      <SideBar />
      <div className='w-full'>
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout
