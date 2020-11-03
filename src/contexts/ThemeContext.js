import React, { useState, useContext, createContext } from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

// custom hook
export function useTheme() {
  return useContext(ThemeContext)
}
// custom hook
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  // creating state
  const [darkTheme, setDarkTheme] = useState(true)
  // updating state
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
