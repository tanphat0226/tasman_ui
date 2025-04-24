import { HiChevronDown, HiChevronRight } from 'react-icons/hi2'
import { HiOutlineFolderPlus } from 'react-icons/hi2'
import { useState } from 'react'
import ProjectDropdown from './ProjectDropdown'
import { Link } from 'react-router'

const SideBarProjects = ({ isSiderBarHover }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDropdown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Link
        to='projects'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='mt-4 hover:bg-emerald-100 p-2 flex items-center justify-between rounded-md cursor-pointer'
      >
        <p className='font-semibold'>My Projects</p>
        <div className='flex items-center justify-between gap-1'>
          {isHovered && (
            <span className='hover:bg-gray-100 p-1 rounded-md'>
              <HiOutlineFolderPlus />
            </span>
          )}

          {isSiderBarHover && (
            <span
              className='hover:bg-gray-100 p-1 rounded-md transition-transform duration-300'
              title='Open Projects'
            >
              <HiChevronRight
                className={`transform transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                onClick={(e) => handleOpenDropdown(e)}
              />
            </span>
          )}
        </div>
      </Link>
      {isOpen && <ProjectDropdown />}
    </>
  )
}

export default SideBarProjects
