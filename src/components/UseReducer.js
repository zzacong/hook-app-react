/**
 * Learn React useReducer
 * YouTube: https://youtu.be/kK_Wqx3RnHk
 */
import React, { useState, useReducer } from 'react'

const ACTIONS = {
  ADD: 'ADD_TODO',
  TOG: 'TOGGLE_TODO',
  DEL: 'REMOVE_TODO',
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOG:
      return todos.map(todo => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed }
        return todo
      })
    case ACTIONS.DEL:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name, completed: false }
}

export default function useReducerApp() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD, payload: { name } })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                color: todo.completed ? 'lightgreen' : 'lightcoral',
                paddingRight: 10,
              }}
            >
              {todo.name}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOG,
                  payload: { id: todo.id },
                })
              }
            >
              Toggle
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DEL,
                  payload: { id: todo.id },
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
