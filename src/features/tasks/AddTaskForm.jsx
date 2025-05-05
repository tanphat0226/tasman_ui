import React from 'react'
import { useState } from 'react'

const AddTaskForm = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    onAdd({ id: Date.now(), name: title, dueDate: 'Tomorrow' })

    onClose()

    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='border border-gray-300 rounded-lg shadow-sm bg-white'>
      <div className='p-3'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='outline-none text-sm w-full text-wrap '
          placeholder='Add a new task'
        />
      </div>

      <div className='flex justify-end gap-2 mt-4 border-t-1 border-t-gray-200 p-3 text-sm'>
        <button
          className='p-2 bg-gray-200 rounded-sm hover:bg-gray-300'
          type='button'
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className='p-2 bg-emerald-500 text-white rounded-sm hover:bg-emerald-600'
          type='submit'
        >
          Add Task
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm
