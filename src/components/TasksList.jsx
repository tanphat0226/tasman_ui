import TaskItem from './TaskItem'
import { RiAddLargeFill } from 'react-icons/ri'

const TasksList = () => {
  return (
    <>
      <ul className='mt-4'>
        <TaskItem />
      </ul>
      <div className='flex items-center mt-4 gap-1.5 ml-3 group cursor-pointer'>
        <span className='text-emerald-500 group-hover:bg-emerald-100 p-1 rounded-full'>
          <RiAddLargeFill />
        </span>
        <button className='text-gray-500 text-sm group-hover:text-emerald-500'>Add Task</button>
      </div>
    </>
  )
}

export default TasksList
