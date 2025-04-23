import { HiOutlineChevronUpDown } from 'react-icons/hi2'

const UserAvatar = () => {
  return (
    <button className='flex items-center gap-2 w-1/2 p-1 cursor-pointer hover:bg-emerald-100 rounded-sm'>
      <img src='https://placehold.co/100' alt='User Avatar' className='w-7 rounded-full' />
      <p className='text-center text-sm font-bold'>Ryan</p>
      <HiOutlineChevronUpDown />
    </button>
  )
}

export default UserAvatar
