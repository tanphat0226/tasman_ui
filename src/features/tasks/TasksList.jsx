import { RiAddLargeFill } from 'react-icons/ri'
import TaskItem from './TaskItem'
import { useState } from 'react'
import TaskForm from './TaskForm'

const task = [
  { id: 1, title: 'Task 1', dueDate: 'Tomorrow', completed: false },
  { id: 2, title: 'Task 2', dueDate: 'Next Week', completed: false },
  { id: 3, title: 'Task 3', dueDate: 'Next Month', completed: true }
]

const TasksList = () => {
  const [tasks, setTasks] = useState(task)
  const [openAddTask, setOpenAddTask] = useState(true)

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  const handleEditTask = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask.id === task.id ? { ...prevTask, ...task } : prevTask))
    )
  }

  const handleComplete = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === task.id ? { ...prevTask, completed: !task.completed } : prevTask
      )
    )
  }

  return (
    <>
      <ul className='mt-4'>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEditTask={handleEditTask}
            onComplete={handleComplete}
          />
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
          <TaskForm onClose={() => setOpenAddTask(false)} onAdd={handleAddTask} />
        )}
      </div>
    </>
  )
}

export default TasksList
