import UserMenu from './UserMenu'
import { HiOutlineBell } from 'react-icons/hi2'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'
import ButtonIcon from './ButtonIcon'

const SideBarHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <UserMenu />
      <span className='flex ml-auto item-center gap-2'>
        <ButtonIcon className='p-2'>
          <HiOutlineBell size={20} />
        </ButtonIcon>
        <ButtonIcon className='p-2'>
          <TbLayoutSidebarLeftCollapse size={20} />
        </ButtonIcon>
      </span>
    </div>
  )
}

export default SideBarHeader
