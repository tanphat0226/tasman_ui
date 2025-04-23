import UserMenu from './UserMenu'
import { HiOutlineBell } from 'react-icons/hi2'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'

const SideBarHeader = () => {
  return (
    <div className='flex items-center'>
      <UserMenu />
      <span className='flex ml-auto item-center gap-2'>
        <button className='flex items-center justify-center w-9 h-9 p-1 hover:bg-emerald-100 rounded-sm'>
          <HiOutlineBell size={20} />
        </button>
        <button className='flex items-center justify-center w-9 h-9 p-1 hover:bg-emerald-100 rounded-sm'>
          <TbLayoutSidebarLeftCollapse size={20} />
        </button>
      </span>
    </div>
  )
}

export default SideBarHeader
