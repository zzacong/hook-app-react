/**
 * Learn React useState
 * YouTube: https://youtu.be/O6P86uwfdR0
 */

import React, { useState } from 'react'
import './App.css'

export default function UseStateApp() {
  // const [count, setCount] = useState(() => {
  //   console.log("Hello");
  //   return 4;
  // });

  // const [state, setState] = useState({ count: 4, theme: 'blue' })
  // const count = state.count
  // const theme = state.theme

  // function decrementCount() {
  //   setState(prevState => {
  //     return {...prevState, count: prevState.count - 1}
  //   })
  // }

  const [count, setCount] = useState(5)
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    setCount(prevState => prevState - 1)
    setTheme('red')
  }

  function incrementCount() {
    setCount(prevState => prevState + 1)
    setTheme('green')
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}
