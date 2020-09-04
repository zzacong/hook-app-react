/**
 * Learn React useState
 * YouTube: https://youtu.be/O6P86uwfdR0
 * Learn React useEffect
 * YouTube: https://youtu.be/0ZJgIjIuY7U
 */

/**
 * useState
 */
import React, { useState, useEffect } from 'react'
import './App.css'

// export default function App() {
//   // const [count, setCount] = useState(() => {
//   //   console.log("Hello");
//   //   return 4;
//   // });

//   // const [state, setState] = useState({ count: 4, theme: 'blue' })
//   // const count = state.count
//   // const theme = state.theme

//   // function decrementCount() {
//   //   setState(prevState => {
//   //     return {...prevState, count: prevState.count - 1}
//   //   })
//   // }

//   const [count, setCount] = useState(5)
//   const [theme, setTheme] = useState('blue')

//   function decrementCount() {
//     setCount(prevState => prevState - 1)
//     setTheme('red')
//   }

//   function incrementCount() {
//     setCount(prevState => prevState + 1)
//     setTheme('green')
//   }

//   return (
//     <div className="App">
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   )
// }

/**
 * useEffect
 */
// export default function App() {
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

// export default function App() {
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

// export default function App() {
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

export default function App() {
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
