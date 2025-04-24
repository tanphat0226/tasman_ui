import { useState } from 'react'
import SideBarHeader from './SideBarHeader'
import SideBarMenu from './SideBarMenu'
import SideBarProjects from './SideBarProjects'

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='w-1/6 p-3 bg-gray-50 min-h-full'
    >
      <SideBarHeader />
      <SideBarMenu />
      <SideBarProjects isSiderBarHover={isHovered} />
    </aside>
  )
}

export default SideBar
