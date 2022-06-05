import React, { FC } from 'react'
import TodoList from './components/TodoList'

export const App: FC = () => {
  return (
    <div className='w-full p-10 mx-6 bg-white drop-shadow-2xl md:w-1/2 xl:w-1/3 rounded-2xl'>
      <h1 className='text-5xl font-bold text-black select-none'>Todo App</h1>

      <TodoList />
    </div>
  )
}
