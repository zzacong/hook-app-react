/**
 * Learn React useEffect
 * YouTube: https://youtu.be/0ZJgIjIuY7U
 */

import React, { useState, useEffect } from 'react'

// export default function UseEffectApp() {
//   const [resourceType, setResourceType] = useState('posts')
//   const [greet, setGreet] = useState('Hi')

//   // console.log('always called')

//   // useEffect(() => {
//   //   console.log('render')
//   // })

//   // useEffect(() => {
//   //   console.log('resource type change')
//   // }, [resourceType]) // be call everytime resourceType change

//   // useEffect(() => {
//   //   console.log('on mount')
//   // }, []) // only be call once on mount

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType('posts')}>Posts</button>
//         <button onClick={() => setResourceType('users')}>Users</button>
//         <button onClick={() => setResourceType('comments')}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       <div>
//         <button onClick={() => setGreet('Hi')}>Hi</button>
//         <button onClick={() => setGreet('Bye')}>Bye</button>
//       </div>
//       <h1>{greet}</h1>
//     </>
//   )
// }

// export default function UseEffectApp() {
//   const [resourceType, setResourceType] = useState('posts')
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json)
//         setItems(json)
//       })
//   }, [resourceType])

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType('posts')}>Posts</button>
//         <button onClick={() => setResourceType('users')}>Users</button>
//         <button onClick={() => setResourceType('comments')}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item, i) => {
//         return <pre key={i}>{JSON.stringify(item)}</pre>
//       })}
//     </>
//   )
// }

// export default function UseEffectApp() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize) // clean up on unmount
//     }
//   }, [])

//   return <div>{windowWidth}</div>
// }

export default function UseEffectApp() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    console.log('resource changed')
    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}
