import SideBarMenuItem from './SideBarMenuItem'

const SideBarMenu = () => {
  return (
    <nav>
      <ul className='flex flex-col gap-1 mt-4'>
        <SideBarMenuItem />
      </ul>
    </nav>
  )
}

export default SideBarMenu
