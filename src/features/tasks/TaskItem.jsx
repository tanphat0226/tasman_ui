import Checkbox from '../../components/Checkbox'
import { LuPenLine } from 'react-icons/lu'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import ButtonIcon from '../../components/ButtonIcon'

const TaskItem = ({ task }) => {
  return (
    <li
      key={task.id}
      className='flex items-center justify-between p-3 bg-white shadow-sm rounded-md mb-2 cursor-pointer'
    >
      <div className='flex items-center'>
        <Checkbox />
        <span className='text-gray-500 ml-1.5'>{task.name}</span>
      </div>
      <div className='flex items-center gap-2'>
        <ButtonIcon>
          <LuPenLine className='' />
        </ButtonIcon>
        <ButtonIcon>
          <HiOutlineDotsHorizontal />
        </ButtonIcon>
      </div>
    </li>
  )
}

export default TaskItem
