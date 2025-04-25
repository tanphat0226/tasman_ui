import React from 'react'
import TasksList from '../components/TasksList'

const TodayPage = () => {
  return (
    <div className='m-8 grow shrink '>
      <h1 className='text-2xl font-bold'>Today</h1>
      <span className='text-sm text-gray-500'>3 tasks</span>

      <TasksList />
      <div className='flex items-center justify-between mt-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Task</button>
      </div>
    </div>
  )
}

export default TodayPage
