import { HiMiniHashtag } from 'react-icons/hi2'

const ProjectDropdown = () => {
  const ProjectItem = [
    {
      id: 1,
      name: 'Project 1'
    },
    {
      id: 2,
      name: 'Project 2'
    },
    {
      id: 3,
      name: 'Project 3'
    },
    {
      id: 4,
      name: 'Project 4'
    },
    {
      id: 5,
      name: 'Project 5'
    }
  ]
  return (
    <ul className='flex flex-col gap-2 ml-2'>
      {ProjectItem.map((item) => (
        <li
          key={item.id}
          className='flex items-center gap-1 hover:bg-emerald-100 p-1.5 rounded-md cursor-pointer'
        >
          <span className='text-emerald-500'>
            <HiMiniHashtag />
          </span>
          <p className='ml-0.5'>{item.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProjectDropdown
