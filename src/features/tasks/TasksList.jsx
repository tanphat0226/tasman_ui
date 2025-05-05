import { RiAddLargeFill } from 'react-icons/ri'
import TaskItem from './TaskItem'
import { useState } from 'react'
import AddTaskForm from './AddTaskForm'

const task = [
  { id: 1, name: 'Task 1', dueDate: 'Tomorrow' },
  { id: 2, name: 'Task 2', dueDate: 'Next Week' },
  { id: 3, name: 'Task 3', dueDate: 'Next Month' }
]

const TasksList = () => {
  const [tasks, setTasks] = useState(task)
  const [openAddTask, setOpenAddTask] = useState(true)

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  return (
    <>
      <ul className='mt-4'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>

      <div className='mt-4 '>
        {!openAddTask ? (
          <button
            onClick={() => setOpenAddTask(true)}
            className='flex items-center mt-4 gap-1.5 ml-3 group cursor-pointer'
          >
            <span className='text-emerald-500 group-hover:bg-emerald-100 p-1 rounded-full'>
              <RiAddLargeFill />
            </span>
            <span className='text-gray-500 text-sm group-hover:text-emerald-500'>Add Task</span>
          </button>
        ) : (
          <AddTaskForm onClose={() => setOpenAddTask(false)} onAdd={handleAddTask} />
        )}
      </div>
    </>
  )
}

export default TasksList
