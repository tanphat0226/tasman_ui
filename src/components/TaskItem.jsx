import Checkbox from './Checkbox'

const TaskItem = () => {
  return (
    <li className='flex items-center justify-between p-3 bg-white shadow-sm rounded-md mb-2'>
      <div className='flex items-center'>
        <Checkbox />
        <span className='ml-1'>Task 1</span>
      </div>
      <span className='text-sm text-gray-500'>Due: Tomorrow</span>
    </li>
  )
}

export default TaskItem
