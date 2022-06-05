import React, { ReactElement, SyntheticEvent, useState, useRef, useEffect } from 'react'
import { ITodoForm } from '../types'
import { FaPlus } from 'react-icons/fa'

function TodoForm({ onSubmit }: ITodoForm): ReactElement {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleChange = (e: SyntheticEvent) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('')
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <form className='flex justify-between mt-12 mb-8' onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        placeholder='Add your new todo'
        name='text'
        className='flex-1 min-w-0 pl-4 mr-2 text-xl font-semibold border-2 border-gray-300 outline-none rounded-md'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='flex items-center justify-center bg-purple-700 rounded w-14 h-14'>
        <FaPlus color='white' className='w-16 h-16 p-3' />
      </button>
    </form>
  )
}

export default TodoForm
