import React from 'react'
import ReactDOM from 'react-dom'

import UseStateApp from './UseState'
import UseEffectApp from './UseEffect'
import UseMemoApp from './UseMemo'
import UseRefApp from './UseRef'
import UseContextApp from './UseContext'

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateApp /> */}
    {/* <UseEffectApp /> */}
    {/* <UseMemoApp /> */}
    <UseRefApp />
    {/* <UseContextApp /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
