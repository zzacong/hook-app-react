/**
 * Learn React useRef
 * YouTube: https://youtu.be/t2ypzz6gJm0
 */
import React, { useEffect, useRef, useState } from 'react'

export default function UseRefApp() {
  const [name, setName] = useState('')
  const renderCount = useRef(1) // { current: 0 }
  const inputRef = useRef()
  const prevName = useRef()

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1
  // })

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <button onClick={focus}>Focus</button>
    </>
  )
}
