import React, { ReactElement, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { ITodoProps } from '../types'

function Todo({ todos, removeTodo }: ITodoProps): ReactElement {
  const [currentId, setCurrentId] = useState<number>(-1)

  return <div className='overflow-x-hidden overflow-y-auto' style={{ maxHeight: '40%', height: '400px' }}> {
    todos.map((todo, index) => (
      <div
        className='flex flex-row items-center justify-center h-16 mb-2 bg-gray-300 rounded-md '
        key={index}
        onMouseEnter={() => setCurrentId(todo.id)}
        onMouseLeave={() => setCurrentId(todo.id)}
        onClick={() => setCurrentId(todo.id)}
      >
        <div
          key={todo.id}
          className='flex-1 pl-4 text-2xl select-none'
        >
          {todo.text}
        </div>
        {(currentId === todo.id) && <MdDelete
          onClick={() => removeTodo(todo.id)}
          color='white'
          className='w-16 h-16 p-3 bg-red-500 cursor-pointer rounded-tr-md rounded-br-md'
        />
        }
      </div>
    ))
  }</div>
}

export default Todo
