import { HiInbox, HiMiniCalendarDateRange } from 'react-icons/hi2'
import { HiCalendar } from 'react-icons/hi2'
import { Link } from 'react-router'

const SideBarMenuItem = () => {
  const MenuItem = [
    {
      text: 'Inbox',
      slug: 'inbox',
      icon: <HiInbox />
    },
    {
      text: 'Today',
      slug: 'today',
      icon: <HiCalendar />
    },
    {
      text: 'Upcoming',
      slug: 'upcoming',
      icon: <HiMiniCalendarDateRange />
    }
  ]

  return (
    <>
      {MenuItem.map((item) => (
        <li key={item.text}>
          <Link
            to={item.slug}
            className='flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-200 transition-colors duration-200  '
          >
            <span key={item.text} className='text-gray-700'>
              {item.icon}
            </span>
            <span className='text-gray-700'>{item.text}</span>
          </Link>
        </li>
      ))}
    </>
  )
}

export default SideBarMenuItem
