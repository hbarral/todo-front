import React, { ReactElement } from 'react'
interface IFooterProps {
  todos: number
  clear: () => void
}

function Footer({ todos, clear }: IFooterProps): ReactElement {
  return <div className='flex flex-row items-center justify-between h-16 mt-14'>
    {
      (todos === 0)
        ? <p className='flex-1 text-2xl select-none'>You have no pending tasks</p>
        : <p className='flex-1 text-2xl select-none'>You have { todos } pending task{ todos > 1 ? 's' : '' } </p>
    }
    <button
      onClick={clear}
      className={`h-16 px-6 text-2xl text-white rounded-md ${todos === 0 ? 'bg-gray-300' : 'bg-purple-700'}`}
      disabled={todos === 0}
    >
      Clear All
    </button>
  </div>
}

export default Footer

