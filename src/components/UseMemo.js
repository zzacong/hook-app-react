/**
 * Learn React useMeMo
 * YouTube: https://youtu.be/THL1OPn72vo
 */

import React, { useState, useMemo, useEffect } from 'react'

export default function UseMemoApp() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  })

  useEffect(() => {
    console.log('Theme changed')
  }, [themeStyles])

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}
