import React from 'react'

const Checkbox = ({ isCompleted }) => {
  return (
    <label className='flex gap-2.5  cursor-pointer'>
      <input checked={isCompleted} className='absolute sr-only h-0 w-0 peer' type='checkbox' />
      <div
        style={{ transformOrigin: '0px 10px' }}
        className='relative h-6 w-6 shrink-0 transition-all duration-200 ease-in-out rounded-full box-border p-0 ml-0 mb-0 bg-white-500 border-2 border-emerald-500 peer-checked:bg-emerald-500 peer-checked:after:content-[""] peer-checked:after:absolute peer-checked:after:left-[50%] peer-checked:after:top-[50%] peer-checked:after:w-1.5 peer-checked:after:h-2.5 peer-checked:after:mt-[-1px] peer-checked:after:bg-transparent peer-checked:after:rotate-45 peer-checked:after:transition-all peer-checked:after:duration-500 peer-checked:after:ease-in-out peer-checked:border-emerald-500 peer-checked:after:border-t-0 peer-checked:after:border-l-0 peer-checked:after:border-r-white peer-checked:after:border-b-white peer-checked:after:border-2 peer-focus:outline-none peer-checked:after:translate-x-[-50%] peer-checked:after:translate-y-[-50%] '
      ></div>
    </label>
  )
}

export default Checkbox
