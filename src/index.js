import React from 'react'
import ReactDOM from 'react-dom'

import UseStateApp from './components/UseState'
import UseEffectApp from './components/UseEffect'
import UseMemoApp from './components/UseMemo'
import UseRefApp from './components/UseRef'
import UseContextApp from './components/UseContext'
import UseReducerApp from './components/UseReducer'

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateApp /> */}
    {/* <UseEffectApp /> */}
    {/* <UseMemoApp /> */}
    {/* <UseRefApp /> */}
    {/* <UseContextApp /> */}
    <UseReducerApp />
  </React.StrictMode>,
  document.getElementById('root')
)
