import SideBar from '../components/SideBar.jsx'

const AppLayout = () => {
  return (
    <main className='flex '>
      <SideBar />
      <div className='main-content'>
        <h1>App Layout</h1>
      </div>
    </main>
  )
}

export default AppLayout
