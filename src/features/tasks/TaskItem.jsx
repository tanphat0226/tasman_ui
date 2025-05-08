import { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { LuPenLine } from 'react-icons/lu'
import ButtonIcon from '../../components/ButtonIcon'
import Checkbox from '../../components/Checkbox'
import TaskForm from './TaskForm'

const TaskItem = ({ task, onEditTask }) => {
  const [editMode, setEditMode] = useState(false)

  return !editMode ? (
    <li
      key={task.id}
      className='flex items-center justify-between p-3 bg-white shadow-sm rounded-md mb-2 cursor-pointer'
    >
      <div className='flex items-center'>
        <Checkbox isCompleted={task.completed} />
        <span className={`text-gray-500 ml-1.5 ${task.completed ? 'line-through opacity-80' : ''}`}>
          {task.title}
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <ButtonIcon>
          <LuPenLine onClick={() => setEditMode(!editMode)} />
        </ButtonIcon>
        <ButtonIcon>
          <HiOutlineDotsHorizontal />
        </ButtonIcon>
      </div>
    </li>
  ) : (
    <li className='mb-2'>
      <TaskForm
        mode='edit'
        onEdit={onEditTask}
        onClose={() => setEditMode(!editMode)}
        taskData={task}
      />
    </li>
  )
}

export default TaskItem
