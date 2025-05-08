import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TaskForm = ({ mode, onClose, onAdd, onEdit, taskData }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (mode === 'edit') {
      setTitle(taskData.title)
    }
  }, [mode, taskData])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === 'edit') {
      onEdit({ ...taskData, title })
    } else {
      onAdd({ id: Date.now(), title })
    }

    onClose()
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='border border-gray-300 rounded-lg shadow-sm bg-white'>
      <div className='p-3'>
        <input
          autoFocus
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
          className={`p-2 bg-emerald-500 text-white rounded-sm hover:bg-emerald-600 ${
            !title.trim() ? 'cursor-not-allowed opacity-50 pointer-events-none' : 'cursor-pointer'
          }`}
          type='submit'
          disabled={!title.trim() ? true : false}
        >
          {mode === 'edit' ? 'Save' : 'Add Task'}
        </button>
      </div>
    </form>
  )
}

export default TaskForm
