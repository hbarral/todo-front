import React, { useState, ReactElement } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Footer from './Footer'
import { ITodo } from '../types'

const defaultState = [
  {
    id: 1,
    text: 'Buy a new gaming laptop',
  },
  {
    id: 2,
    text: 'Complete a previous task',
  },
  {
    id: 3,
    text: 'Create video for YouTube',
  },
  {
    id: 4,
    text: 'Create a new portfolio site',
  },
]

function TodoList(): ReactElement {
  const [todos, setTodos] = useState<ITodo[]>(defaultState)
  const addTodo = (todo: ITodo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return

    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  const removeTodo = (id: number) => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const removeAll = () => {
    setTodos([])
  }

  return (
    <div className='mt-6'>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
      />
      <Footer
        todos={todos.length}
        clear={removeAll}
      />
    </div>
  )
}

export default TodoList
