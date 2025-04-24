import { HiOutlineChevronUpDown } from 'react-icons/hi2'

const UserMenu = () => {
  return (
    <button className='flex items-center max-w-[65%] gap-2 p-1 cursor-pointer hover:bg-gray-200 rounded-sm relative'>
      <img src='https://placehold.co/100' alt='User Avatar' className='w-8 rounded-full' />
      <p className='text-center font-bold whitespace-normal overflow-hidden text-ellipsis pr-4'>
        Ryan
      </p>
      <HiOutlineChevronUpDown className='absolute right-0 top-[50%] translate-y-[-50%]' />
    </button>
  )
}

export default UserMenu
