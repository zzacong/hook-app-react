/**
 * Learn useContext In 13 Minutes
 * YouTube: https://youtu.be/5LrDIWkK_Bc
 */
import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'

// export const ThemeContext = React.createContext()

// export default function UseContextApp() {
//   const [darkTheme, setDarkTheme] = useState()

//   function toggleTheme() {
//     setDarkTheme(prevDarkTheme => !prevDarkTheme)
//   }

//   return (
//     <>
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <FunctionContextComponent />
//       </ThemeContext.Provider>
//     </>
//   )
// }

import { ThemeProvider } from './ThemeContext'

export default function UseContextApp() {
  return (
    // wrapping all logic for handling state, updating state
    // pushing out different values to all children
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}
